const express = require('express');
const router = express.Router();
const BookController = require("../controllers/bookController")

router.post("/createBook", BookController.createBook)
router.post("/createAuthor", BookController.createAuthor)
router.get("/get_book_of_specific_authorge", BookController.get_book_of_specific_authorge)
router.get("/update_price", BookController.update_price)
router.get("/price_btwn_50_to_100", BookController.price_btwn_50_to_100)



module.exports = router;