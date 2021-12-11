const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/students');
const upload = require("../middlewares/upload")
const middlewares = require("../middlewares/candidates")
const {authenticate} = middlewares
const{login,importStudents,VotedPositions,getAllStudents} = studentsController;

router.post('/login',login);
router.post('/import',upload.single('doc'),importStudents);
router.get('/',getAllStudents);

//returns voted positions so far
router.get('/votes/me',authenticate,VotedPositions);

module.exports= router;