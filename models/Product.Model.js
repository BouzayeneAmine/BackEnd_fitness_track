const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//Define a schema
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    quantity: {
        type: String,
        trim: true,
        required: true
    },
    code: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: String,
        trim: true,
        required: true
    },
    customer: {
        type: Schema.Types.ObjectId, ref: "Customer"
    },
    
});

module.exports = mongoose.model('Product', ProductSchema);