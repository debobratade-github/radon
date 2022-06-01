const express = require('express');
const externalModule = require('../logger/logger')
const logger= require('../logger/logger');
const helper= require('../util/helper');
const formatter= require('../validator/formatter');

const router = express.Router();


router.get('/test-me', function (req, res) {
    logger.welcome()
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo()
    formatter.trim()
    formatter.changetoLowerCase()
    formatter.changetoUpperCase()
    res.send("Welcome in DEBOBRATA DEY'S first api")
});

module.exports = router;
// adding this comment for no reason