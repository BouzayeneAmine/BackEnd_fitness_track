const productModel = require('../models/Product.Model');
module.exports = {
    add: function (req, res, next) {
 
        productModel.create(req.body, function (err, result) {
          if (err)
             next(err);
          else
             res.json({ status: "success", message: "product added successfully!!!", data: result });
 
       });
    },
    remove: function (req, res, next) {
 
        productModel.findByIdAndRemove(req.params.id,req.body, function (err, result) {
          if (err)
             next(err);
          else
             res.json({ status: "success", message: "product removed successfully!!!", data: null });
 
       });
    },
    update: function (req, res, next) {
 
        productModel.findByIdAndUpdate(req.params.id,req.body, function (err, result) {
          if (err)
             next(err);
          else
             res.json({ status: "success", message: "product bdated successfully!!!", data: null });
 
       });
    },
    all: function (req, res, next) {
 
      productModel.find({}).populate("customer").exec({}, function (err, result) {
      
      
          if (err)
             next(err);
          else
             res.json({ status: "success", message: "product selected successfully!!!", data: result });
 
       });
    },
    
 }