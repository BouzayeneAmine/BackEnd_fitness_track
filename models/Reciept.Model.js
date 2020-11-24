const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//Define a schema
const Schema = mongoose.Schema;
const RecieptSchema = new Schema({
    numero: {
        type: String,
        trim: true,
        required: true,
    },
    date: {
        type: String,
        trim: true,
        required: true
    },
    heure: {
        type: String,
        trim: true,
        required: true
    },
    wheight: {
        type: String,
        trim: true,
        required: true
    },
    camion: {
        type: Schema.Types.ObjectId, ref: "Camion"
    },
    customer: {
        type: Schema.Types.ObjectId, ref: "Customer"
    },
    product: {
        type: Schema.Types.ObjectId, ref: "Product"
    },
});
module.exports = mongoose.model('Reciept', RecieptSchema);