const express = require('express');
const router = express.Router();
const productController = require('../controllers/Product.Controller');
router.post('/add', productController.add);
router.delete('/remove/:id', productController.remove);
router.get('/all', productController.all);
router.put('/update/:id', productController.update);
module.exports = router;