const recieptModel = require('../models/Reciept.Model');
module.exports = {
    add: function (req, res, next) {
 
      recieptModel.create(req.body, function (err, result) {
          if (err)
             next(err);
          else
             res.json({ status: "success", message: "Reciept added successfully!!!", data: null });
 
       });
    },
    remove: function (req, res, next) {
 
      recieptModel.findByIdAndRemove(req.params.id,req.body, function (err, result) {
          if (err)
             next(err);
          else
             res.json({ status: "success", message: "Reciept removed successfully!!!", data: null });
 
       });
    },
    update: function (req, res, next) {
 
      recieptModel.findByIdAndUpdate(req.params.id,req.body, function (err, result) {
          if (err)
             next(err);
          else
             res.json({ status: "success", message: "Reciept updated successfully!!!", data: null });
 
       });
    },
    all: function (req, res, next) {
 
      recieptModel.find({}).populate("camion","-__v").populate("product","-__v").populate("customer","-__v").exec({}, function (err, result) {
         if (err)
         next(err);
      else
         res.json({ status: "success", message: "Reciept selected successfully!!!", data: result });

       })
    },
    
 }