// import 'dotenv/config'; // import environmental variables
const cors = require('cors'); //enable cross site scripting
const express = require("express");
const app = express();
const path = require('path');
const { encryptPassword, createUser, verifyUser, setSSIDcookie, generateWorkouts, randomizeWorkout, populateUserWorkouts, grabExistingUserWorkouts, testCookie } = require('./controller.js');
const { translateWorkout } = require('./translationController.js');

app.use(cors()); // add the cors http header to every request by default - makes all routes accessible for all domains.

//extract body of incoming request stream and makes accessible on req.body
app.use(express.json()); // automatically transforms incoming body data - built on bodyParser
app.use(express.urlencoded({ extended: true })); // automatically transforms incoming body data - built on bodyParser


app.use('/build', express.static(path.join(__dirname, '../build'))); //static serve files in bundle.js or whatever is in build folder. this is what actually "connects" our backend to react.

app.post('/signup', encryptPassword, createUser, verifyUser, setSSIDcookie, generateWorkouts, (req, res) => {
  // console.log('signup reques sent.');
  res.redirect('/workouts');
})

app.post('/login', verifyUser, setSSIDcookie, generateWorkouts, (req, res) => {
  // console.log("login request sent.");
  res.redirect('/workouts');
})

app.get('/newworkout', randomizeWorkout, translateWorkout, populateUserWorkouts, (req, res) => {
  // console.log("get request set to newworkout!");
  // console.log('data sent back from dbase: ', res.locals.randomWorkout);
  res.send(res.locals.randomWorkout);
})

app.get('/', testCookie, (req, res) => {
  // console.log('serving');
  res.sendFile(path.join(__dirname, '../index.html'));
})

app.get('/workouts', (req, res) => {
  // console.log("get request send to workouts!");
  res.sendFile(path.join(__dirname, '../workouts.html'));
})

app.get('/userworkouts', grabExistingUserWorkouts, (req, res) => {
  console.log("get request sent to userworkouts!");
  //send data back to frontend
  res.send(res.locals.existingWorkouts);
})

app.listen(3000, () => {
  console.log(`listening on port 3000`);
})