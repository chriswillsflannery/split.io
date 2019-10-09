const pool = require('../database/database');
//import uuid to generate unique ids for each user which, in createUser, we will pass into postgres
const uuid = require('uuidv4').default;
const fetch = require('node-fetch');

module.exports = {
  createUser: (req, res, next) => {
    console.log("req body:", req.body);
    console.log("in signup!");

    if (typeof req.body.username === 'string' && typeof req.body.password === 'string') {
      const uniqueID = uuid();
      const text = 'INSERT INTO users(name, password, uniqueID) VALUES ($1, $2, $3) RETURNING *';
      const values = [req.body.username, req.body.password, uniqueID];

      //create new user with username: req.body.username and password: req.body.password
      pool.query(text, values, (err, res) => {
        let error = false;
        if (err) {
          console.log("error: bad query in createUser", err.stack);
          error = true;
        } else {
          console.log(res.rows[0]); // in other words, return our new user's username and password
        }
        if (error === false) {
          next();
        }
      })
    }

    // next();
  },

  verifyUser: (req, res, next) => {
    //grab user id to pass through res.locals so we have access in setSSIDcookie

    console.log('req body:', req.body);
    console.log("in verify!");
    const username = req.body.username;
    const password = req.body.password;

    //query database to see if user exists
    const text = 'SELECT * FROM users WHERE name = $1 AND password = $2';
    const values = [username, password];
    let error = false;

    pool.query(text, values, (err, success) => {
      if (err) {
        console.log("error: bad query in verifyUser:", err.stack);
        error = true;
      } else {
        console.log("success in validation:", success.rows[0].uniqueid);
        res.locals.uniqueid = success.rows[0].uniqueid;
        // console.log("res locals in veryify", res.locals);
        if (success.rows.length === 0) {
          console.log("error: username and/or password does not exist!");
          error = true;
        }
      }
      console.log("error is", error);
      if (error === false) {
        next();
      }
    })
    // next();
  }, //end of verify user

  testCookie: (req, res, next) => {
    res.cookie("newCookie", "hi");
    next();
  },

  setSSIDcookie: (req, res, next) => {
    res.cookie('ssid', res.locals.uniqueid, { httpOnly: true });
    // console.log("in cookie! unique id:", res.locals.uniqueid);
    next();
  },

  // startSession: (req, res, next) => {
  //   console.log("starting new session!");
  //   // const uniqueID = uuid();

  //   const text = 'CREATE TABLE IF NOT EXISTS testTable (id SERIAL PRIMARY KEY, item VARCHAR NOT NULL, price VARCHAR NOT NULL)';
  //   // const values = [uniqueID];

  //   pool.query(text, (err, success) => {
  //     if (err) {
  //       console.log("error: unable to create table");
  //     } else {
  //       console.log("success: table created! check postico for deets")
  //     }
  //   })
  //   next();
  // }

  generateWorkouts: (req, res, next) => {
    console.log("in generateWorkouts!");

    // pull in data from workouts api to populate table workouts
    fetch('https://wger.de/api/v2/exercise/')
      .then(data => data.json())
      .then(data => {
        const randNum = Math.floor(Math.random() * data.results.length);
        const workoutName = data.results[randNum].name;
        const workoutDescription = data.results[randNum].description;

        const uniqueID = uuid();
        //query to workouts table to add in values as new workouts
        const text = 'INSERT INTO workouts(workout, description) VALUES ($1, $2) RETURNING *';
        const values = [workoutName, workoutDescription];

        pool.query(text, values, (err, success) => {
          if (err) {
            console.log("error inserting new workout into workouts: ", err.stack);
          } else {
            console.log("successfully added new workout to db in generateWorkouts");
          }
        })
      })
      .catch(err => console.log('unable to fetch in generateWorkouts', err.stack));


    next();
  },

  randomizeWorkout: (req, res, next) => {
    console.log("in randomize workout");
    //retrieve random workout from workouts table
    //determine workouts table length
    const text = 'SELECT workout, description FROM workouts OFFSET floor(random()*3) LIMIT 1';

    pool.query(text, (err, success) => {
      if (err) {
        console.log("error in randomizeWorkout ", err.stack)
      } else {
        console.log("success in randomizeWorkout!", success.rows);
        res.locals.randomWorkout = [];
        res.locals.randomWorkout.push(success.rows[0].workout);
        res.locals.randomWorkout.push(success.rows[0].description);
        next();
      }
    })
  }

}