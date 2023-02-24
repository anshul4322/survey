const express = require("express");
const surveyController = require('../../controllers/survey.controller')

const router = express.Router();

router.post("/feedback",surveyController.saveData)

module.exports = router;