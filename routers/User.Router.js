const { Router } = require('express');
const express = require('express');
const UserController = require('../controllers/User.Controller');
const router = express.Router();
const userController = require('../controllers/User.Controller');
const check_auth =require("../middleware/check_auth");

router.post('/register', userController.register);
router.post('/login', userController.login);
router.delete('/remove/:id',check_auth,userController.remove);
router.put('/update/:id',check_auth,userController.update);
router.post("/logout",check_auth,UserController.logout);
router.post("/refresh/token",userController.refreshToken);
module.exports = router;