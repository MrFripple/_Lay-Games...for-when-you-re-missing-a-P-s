const Rsvp = require('../models/rsvp.js');

const findRsvpAndUpdate = (newRSVP) => {
  let oneRSVP = new Rsvp(newRSVP);
  oneRSVP.save(function (err, book) {
    if (err) return console.error(err);
    console.log( newRSVP," saved to RSVP");
  });
};

module.exports = findRsvpAndUpdate;
