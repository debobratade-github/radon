const express = require('express');
const router = express.Router();
const allController = require("../controllers/allController")
const commonMW = require("../commonMiddleware/middleware.js")




router.post("/createProduct", allController.createProduct)
router.post("/createUser", commonMW.check, allController.createUser)
router.post("/createOrder", commonMW.check, allController.createOrder)


module.exports = router;