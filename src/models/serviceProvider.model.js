
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  category: {type: String,required : true}
});

const Location = mongoose.model('serviceProviders', locationSchema);

module.exports = Location;


  