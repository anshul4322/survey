const express = require('express');
const surveyRoute = require("./survey.route");

const router = express.Router();

router.use("/survey", surveyRoute);

module.exports = router;