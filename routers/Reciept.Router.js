const RecieptController = require('../controllers/RecieptController');
const express = require('express');
const router = express.Router();
router.post('/add', RecieptController.add);
router.get('/all', RecieptController.all);
router.delete('/remove/:id', RecieptController.remove);
router.put('/update/:id', RecieptController.update);
module.exports = router;