const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 code: {
  type: String,
  trim: true,
  required: true
 },
 adresse: {
  type: String,
  trim: true,
  required: true
 },
 camions: [{
    type: Schema.Types.ObjectId, ref: "Camion"
  }],
 
 
});

module.exports = mongoose.model('Customer', CustomerSchema);