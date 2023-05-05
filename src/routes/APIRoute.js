// EXPRESS
const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/APIController');

router.post('/novoCarro', controller.newCar)

module.exports = router;