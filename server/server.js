// import 'dotenv/config'; // import environmental variables
const cors = require('cors'); //enable cross site scripting
const express = require("express");
const app = express();
const path = require('path');
const controller = require(path.resolve(__dirname, './controller.js'));

app.use(cors()); // add the cors http header to every request by default - makes all routes accessible for all domains.

//extract body of incoming request stream and makes accessible on req.body
app.use(express.json()); // automatically transforms incoming body data - built on bodyParser
app.use(express.urlencoded({ extended: true })); // automatically transforms incoming body data - built on bodyParser


app.use('/build', express.static(path.join(__dirname, '../build'))); //static serve files in bundle.js or whatever is in build folder. this is what actually "connects" our backend to react.

app.post('/signup', controller.createUser, controller.verifyUser, controller.setSSIDcookie, controller.generateWorkouts, (req, res) => {
  console.log('signup reques sent.');
  res.redirect('/workouts');
})

app.post('/login', controller.verifyUser, controller.setSSIDcookie, controller.generateWorkouts, (req, res) => {
  console.log("login request sent.");
  res.redirect('/workouts');
})

app.get('/newworkout', controller.randomizeWorkout, (req, res) => {
  console.log("get request set to newworkout!");
  console.log('data sent back from dbase: ', res.locals.randomWorkout);
  res.send(res.locals.randomWorkout);
})

app.get('/', controller.testCookie, (req, res) => {
  console.log('serving');
  res.sendFile(path.join(__dirname, '../index.html'));
})

app.get('/workouts', (req, res) => {
  console.log("get request send to workouts!");
  res.sendFile(path.join(__dirname, '../workouts.html'));
})

app.listen(3000, () => {
  console.log(`listening on port 3000`);
})