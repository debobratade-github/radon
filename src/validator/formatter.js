const trim = function () {
    let a = " Function Up "
    console.log("Before applying the trim function : " + a);
    let b = a.trim()
    let c = b.replace(/\s/g, '')
    console.log("After apply the trim function :" + c);
}

const changetoLowerCase = function () {
    let e = "FunctionUp"
    let f = e.toLowerCase()
    console.log("Before applying the lowercase function :" + e);
    console.log("After apply the lowercase function :" + f);
}
const changetoUpperCase = function () {
    let g = "FunctionUp"
    let h = g.toUpperCase()
    console.log("Before applying the uppercase function :" + g);
    console.log("After apply the uppercase function :" + h);
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase = changetoUpperCase
