const express = require('express');
const router = express.Router();
const customerController = require('../controllers/Customer.Controller');
router.post('/add', customerController.add);
router.delete('/remove/:id', customerController.remove);
router.get('/all', customerController.all);
router.put('/update/:id', customerController.update);
module.exports = router;