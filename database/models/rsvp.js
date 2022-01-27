const mongoose = require('mongoose');

const rsvpSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  numberOfGuests: Number
});

const Rsvp = mongoose.model('Rsvp', rsvpSchema);

module.exports = Rsvp;