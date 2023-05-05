
const mongoose = require("mongoose");

module.exports = () =>{
   return mongoose.connect("mongodb+srv://getlocation:wKuh4Oc4EvWbHLyT@cluster0.hadwvj3.mongodb.net/?retryWrites=true&w=majority")
}