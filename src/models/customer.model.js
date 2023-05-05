const mongoose = require('mongoose');

const customer = new mongoose.Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

const Location = mongoose.model('customer', customer);

module.exports = Location;

