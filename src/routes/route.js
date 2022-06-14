const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const mw = require("../middleware/auth.js")


router.post("/users", userController.createUser)
router.post("/login", userController.loginUser)
//router.get("/users/:userId", userController.getUserData)
router.put("/users/:userId", userController.updateUser)
//router.delete("/user/:userId", userController.deleteUserData)


router.get("/users/:userId", mw.auth, userController.getUserData)
router.delete("/user/:userId", mw.auth, userController.deleteUserData)

module.exports = router;