// const pool = require('pg');
require('dotenv').config();

const translate = require('translate');
translate.engine = 'google';
translate.key = process.env.TRANSLATION_KEY;


module.exports = {
  translateWorkout: (req, res, next) => {
    console.log("translate key", translate.key);
    console.log('translate engine', translate.engine);
    console.log("randomWorkout from randomize:", res.locals.randomWorkout);
    // translate from german to english using google translate api
    translate(res.locals.randomWorkout[0], { from: 'de', to: 'en' })
      .then(text => {
        console.log("what is text", typeof text);
        console.log("current reslocals", res.locals.randomWorkout[0]);
        res.locals.randomWorkout[0] = text;
        console.log("now what is reslocals", res.locals.randomWorkout);

        translate(res.locals.randomWorkout[1], { from: 'de', to: 'en' })
          .then(description => {
            res.locals.randomWorkout[1] = description;
            next();
          })


      })
      .catch(err => console.log("error: unable to translate randomWorkout!"));
    // next();
  },
}