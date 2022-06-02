const express = require('express');
const { json } = require('express/lib/response');
const res = require('express/lib/response');
const underscore = require('underscore');
const lodash = require('lodash');
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



router.get('/hello',function(req, res){
  //Question: 1
  let sub_array_of_month_in_year =lodash.chunk(['January','February','March','April','May','June','July','August','September','October','November','December'], 3 )
  console.log(sub_array_of_month_in_year);
  

//Question: 2
const print_last_9_element_in_array=lodash.takeRight([1,3,5,7,9,11,13,15,17,19],9)
console.log(print_last_9_element_in_array);
  

  //Question: 3
const arr1=[1,2,3,4,5]
const arr2=[2,6,7,4,7]
const arr3=[3,9,4,8,34]
const arr4=[2,45,66,7,88]
const arr5=[9,40,66,77,3]
const uniq_element_from_arrays= lodash.union(arr1,arr2,arr3,arr4,arr5)
console.log(uniq_element_from_arrays);
//Question: 4

const movies_pair_for_object = lodash.fromPairs([["Horror","The Shining"],["Drama","Titanic"],["Thriller","Shutter Island"],["Fantasy","Pans Labyrinth"]] )
console.log(movies_pair_for_object);


res.send({sub_array_of_month_in_year, print_last_9_element_in_array, uniq_element_from_arrays, movies_pair_for_object})
})

module.exports = router;
// adding this comment for no reason