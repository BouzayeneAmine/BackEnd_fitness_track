const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//Define a schema
const Schema = mongoose.Schema;
const CamionSchema = new Schema({
 immatricule: {
  type: String,
  trim: true,  
  required: true,
 },
 code: {
    type: String,
    trim: true,  
    required: true,
   },
   tare: {
      type: String,
      trim: true,  
      required: true,
     },
   customer:{
      type: Schema.Types.ObjectId, ref: "Customer"
  }
   
});


module.exports = mongoose.model('Camion', CamionSchema);