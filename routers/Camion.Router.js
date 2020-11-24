const express = require('express');
const router = express.Router();
const camionControllers = require('../controllers/Camion.Controller');

router.post('/add', camionControllers.add);
router.delete('/remove/:id', camionControllers.remove);
router.get('/all', camionControllers.all);
router.put('/update/:id', camionControllers.update);
module.exports = router;