const express = require('express');
const router = express.Router();
const positionsController = require('../controllers/arbitration');



const{ login,approve} = positionsController;

router.post('/',login);
router.get('/approve/:id',approve);



module.exports= router;