const jwt = require("jsonwebtoken");

const auth = function (req, res, next) {

    let token = req.headers["x-Auth-token"];
    let userid = req.params.userId;
    if (!token) token = req.headers["x-auth-token"];
    if (!token)
        return res.send({ status: false, msg: "token is invalid" });
    // Verify JWT token
    let decodedToken = jwt.verify(token, "functionup-radon");
    let userloggedin = decodedToken.userId
    if (userid != userloggedin)
        return res.send({ status: false, msg: "User has not the authorisation to continue the request" });
    else
        next()
}



module.exports.auth = auth