const express = require('express');
const router = express.Router();
const positionsController = require('../controllers/positions');



const{ getAllPositions,allPositions,addPosition} = positionsController;

router.get('/',getAllPositions);
router.get('/all', allPositions)
router.post('/add', addPosition)

module.exports= router;