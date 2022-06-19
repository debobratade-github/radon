const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")





router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)


router.get("/cowin/getByDistrict", CowinController.getByDistrict)
router.get("/getLondonWeather", CowinController.getLondonWeather)
router.get("/getCitiesWeather", CowinController.getCitiesWeather)
router.get("/getId", CowinController.getId)
router.post("/postText", CowinController.postText)


module.exports = router;