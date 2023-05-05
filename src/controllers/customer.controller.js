
const express = require('express');

const Location = require('../models/customer.model');

const router = express();





// Save location data
router.post('/', async(req, res) => {

  try{
    const location = await Location(req.body);
    location.save()
     return res.status(200).json(location)

  }catch(err){
     return res.status(500).send(err.message)
  }
    
  });
  
  



  // Get location data
  router.get('/', (req, res) => {
    Location.find()
      .then(locations => res.json(locations))
      .catch(err => console.error(err));
  });

  module.exports = router;
  