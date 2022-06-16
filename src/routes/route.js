const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const mw = require("../middleware/auth.js")


router.post("/users", userController.createUser)  //Q.1
router.post("/login", userController.loginUser)  //Q.2

router.get("/users/:userId", mw.auth, userController.getUserData)  //Q.3
router.put("/users/:userId", mw.auth, userController.updateUser)  //Q.4
router.delete("/user/:userId", mw.auth, userController.deleteUserData)  //Q.5
router.post("/users/:userId/posts", mw.auth, userController.getaddData)   //Q.6
module.exports = router;