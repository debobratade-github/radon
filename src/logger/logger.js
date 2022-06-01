const endpoint = "https://www.functionup.org"
const batch = "radon"

const log = function() {
    console.log('I am inside the log function')
}

const welcome = function(){
    console.log("Welcome to my application. I am Debobrata Dey and a part of FunctionUp Radon cohort.");
}

module.exports.endpoint = endpoint
module.exports.batch = batch
module.exports.log = log
module.exports.welcome = welcome
