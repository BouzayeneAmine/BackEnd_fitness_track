const camionModel = require('../models/Camion.Model');
module.exports = {
    add: function (req, res, next) {
 
      camionModel.create(req.body, function (err, result) {
          if (err)
             next(err);
          else
             res.json({ status: "success", message: "camion added successfully!!!", data: null });
 
       });
    },
    remove: function (req, res, next) {
 
      camionModel.findByIdAndRemove(req.params.id, function (err, result) {
          if (err)
             next(err);
          else
             res.json({ status: "success", message: "camion removed successfully!!!", data: null });
 
       });
    },
    update: function (req, res, next) {
 
      camionModel.findByIdAndUpdate(req.params.id,req.body, function (err, result) {
          if (err)
             next(err);
          else
             res.json({ status: "success", message: "camion updated successfully!!!", data: null });
 
       });
    },
    all: function (req, res, next) {
    
      camionModel.find({}).populate("customer").exec({}, function (err, result) {
          if (err)
             next(err);
          else
             res.json({ status: "success", message: "camion all successfully!!!", data: result });
 
       });
    },
    
 }