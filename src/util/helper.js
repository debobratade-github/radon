const printDate = function () {
    let s = new Date();
    let currentday = s.getDate()
    console.log("Current Date : " + currentday);
}

const printMonth = function () {
    let s = new Date();
    const currentMonth = s.getMonth() + 1;
    console.log("Current Month : " + currentMonth);
}
const getBatchInfo = function () {
    let a = new Date('May 16 2022');
    let a2 = a.getDate()
    let b = new Date()
    let b2 = b.getDate()
    let c = (b2 + a2)
    let g = (c / 7)
    let h = Math.ceil(g)

    const weekday = b.getDay();
    console.log("‘Radon, W" + h + "D" + weekday + ", the topic for today is Nodejs module system’")
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
