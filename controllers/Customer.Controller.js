const customerModel = require('../models/Customer.Model');
module.exports = {
    add: function (req, res, next) {
 
      customerModel.create(req.body, function (err, result) {
          if (err)
             next(err);
          else
             res.json({ status: "success", message: "customer added successfully!!!", data: null });
 
       });
    },
    remove: function (req, res, next) {
 
      customerModel.findByIdAndRemove(req.params.id,req.body, function (err, result) {
          if (err)
             next(err);
          else
             res.json({ status: "success", message: "customer added successfully!!!", data: null });
 
       });
    },
    update: function (req, res, next) {
 
      customerModel.findByIdAndUpdate(req.params.id ,req.body, function (err, result) {
          if (err)
             next(err);
          else
             res.json({ status: "success", message: "Sub added successfully!!!", data: null });
 
       });
    },
    all: function (req, res, next) {
      customerModel.find({}).populate({ path: 'camions', model: 'Camion' }).exec({}, function (err, result) {
       
          if (err)
             next(err);
          else
             res.json({ status: "success", message: "customer added successfully!!!", data: result });
 
       });
    },
    
 }