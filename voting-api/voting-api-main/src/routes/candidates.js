const express = require('express');
const router = express.Router();
const candidatesController = require('../controllers/candidates');

const middlewares = require("../middlewares/candidates")
const {checkInputs,authenticate} = middlewares
const upload = require("../middlewares/imgUpload")

const{ register,vote,allCandidates,results,report,publish} = candidatesController;

router.post('/register',authenticate,upload.single('img'),checkInputs,register);
router.post('/vote/:candid/:positionId',authenticate,vote);
router.get('/all',allCandidates);
router.get('/results',results);
router.get('/report',report);
router.post('/publish',publish);

module.exports= router;