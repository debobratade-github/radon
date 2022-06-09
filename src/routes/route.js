const express = require('express');
const router = express.Router();
const BookController = require("../controllers/bookController")


router.post("/createPublisher", BookController.createPublisher)
router.post("/createAuthor", BookController.createAuthor)
router.post("/createBook", BookController.createBook)
router.get("/getalldetails", BookController.getalldetails)
router.put("/updateBook", BookController.updateBook)



module.exports = router;