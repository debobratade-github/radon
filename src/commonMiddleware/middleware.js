
const check = function (req, res, next) {
    let header = req.headers["isfreeappuser"];

if(header =="true" || header =="false"){
    next(); 
}
else{
    res.send({msg:"the request is missing a mandatory header"})
}

}

module.exports.check = check 