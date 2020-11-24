const userModel = require('../models/User.Model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const randToken = require('rand-token');
var refreshTokens = {}
const { token } = require('morgan');
module.exports = {
   register: function (req, res, next) {


      console.log("register : ", req.body)
      userModel.create(req.body, function (err, result) {
         if (err)
            res.json({ status: "error", message: err, data: null });
         else
            res.json({ status: "success", message: "User added successfully!!!", data: result });

      });
   },
   remove: function (req, res, next) {

      userModel.findByIdAndRemove(req.params.id, function (err, result) {
         if (err)
            next(err);
         else
            res.json({ status: "success", message: "user remove successfully!!!", data: null });

      });
   },
   update: function (req, res, next) {

      userModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
         console.log(err);
         if (err)
            next(err);
         else
            res.json({ status: "success", message: "user updated successfully!!!", data: null });

      });
   },
   login: function (req, res, next) {
      userModel.findOne({ email: req.body.email }, function (err, userInfo) {
         if (err) {
            next(err);
         } else {
            if (bcrypt.compareSync(req.body.password, userInfo.password)) {
               const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
               const refreshToken = randToken.uid(265)
               refreshTokens[refreshToken] = userInfo._id
               res.json({
                  status: "success", message: "user found!!!", data: {
                     user: userInfo,
                     accesstoken: token,
                     refreshToken: refreshToken
                  }
               });

            } else {
               res.json({
                  status: "error", message: "Invalid email/password!!!",
                  data: null




               });
            }
         }
      });
   },
   
   logout: function (req, res) {
      var refreshToken = req.body.refreshToken
      if (refreshToken in refreshTokens) {
         delete refreshTokens[refreshToken]
      }
      res.send(204)

   },

   refreshToken: function (req, res) {
      var id = req.body.username._id
      var refreshToken = req.body.refreshToken
      if((refreshToken in refreshTokens) && (refreshTokens[refreshToken] == id)) {
        
        var token = jwt.sign(id,app.get("secretKey"), { expiresIn: "5h" })
        res.json({token:token})
      }
      else {
        res.send(401)
      }
   },
}