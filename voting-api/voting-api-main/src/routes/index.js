const express = require('express');
const router = express.Router();
const positions = require('./positions');
const students = require("./students")
const candidates = require("./candidates")
const arbitration = require("./arbitration")

router.use('/positions',positions);
router.use('/students',students);
router.use('/candidates',candidates);
router.use('/arbitration',arbitration);

module.exports= router;