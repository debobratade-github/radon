const express = require('express');
const { json } = require('express/lib/response');
const res = require('express/lib/response');
const underscore = require('underscore');
const lodash = require('lodash');
const router = express.Router();

//Assignment: 2
//Question: 1
const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]

router.get('/movies', function (req, res) {

  res.send({ Movies: movies })
});

//Question: 2 & 3
router.get('/movies/:indexNumber', function (req, res) {
  let x = req.params.indexNumber;
  if (x > movies.length) {
    res.send("Use a valid Index")
  }
  else {
    res.send({ movies: "The movie is " + movies[x] })
  }
})

//Question: 4
const arr_ob = [{
  "id": 1,
  "name": "The Shining"
}, {
  "id": 2,
  "name": "Incendies"
}, {
  "id": 3,
  "name": "Rang de Basanti"
}, {
  "id": 4,
  "name": "Finding Nemo"
}]

router.get('/flims', function (req, res) {
  res.send({ Flims: arr_ob })
})

//Question: 5
router.get('/flims/:filmId', function (req, res) {
  let x = req.params.filmId


  if (x > arr_ob.length) {
    res.send("No movie exists with this id")
  }
  else {
    let y = JSON.stringify(arr_ob[x])
    let z = y.replace(/\\/g, 'br');
    res.send(z)
  }
})


//Assignment 3
//Question: 1
router.get("/sol1", function (req, res) {
  let arr = [1, 2, 3, 5, 6, 7]
  let ms;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      ms = arr[i] + 1
    }

  }
  res.send({ Data: "Missing number is: " + ms })
})

//Question: 2
router.get("/sol2", function (req, res) {
  let arr = [33, 34, 35, 37, 38]
  let ms;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      ms = arr[i] + 1
    }

  }
  res.send({ Data: "Missing number is: " + ms })
})




module.exports = router;
// adding this comment for no reason