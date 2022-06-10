const express = require('express');
const router = express.Router();
const BookController = require("../controllers/bookController")



router.get("/bookbyauthor", BookController.bookbyauthor)
router.get("/authorage50andratinggrt4", BookController.authorage50andratinggrt4)



module.exports = router;