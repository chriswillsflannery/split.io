// const pool = require('pg');
require('dotenv').config();

const translate = require('translate');
translate.engine = 'google';
translate.key = process.env.TRANSLATION_KEY;


module.exports = {
  translateWorkout: (req, res, next) => {
    // translate from german to english using google translate api
    translate(res.locals.randomWorkout[0], { from: 'de', to: 'en' })
      .then(text => {


        res.locals.randomWorkout[0] = text;


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