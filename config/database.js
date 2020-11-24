//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/gespese';
mongoose.connect(mongoDB,{ useUnifiedTopology: true , useNewUrlParser: true});
mongoose.Promise = global.Promise;
module.exports = mongoose;