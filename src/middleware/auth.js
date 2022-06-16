const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const auth = async function (req, res, next) {
    try {
        let token = req.headers["x-Auth-token"];
        let userid = req.params.userId;
        if (!token) token = req.headers["x-auth-token"];
        if (!token)
            return res.status(401).send({ status: false, msg: "token is invalid" });
        // Check user is present or not
        let userId = req.params.userId;
        let user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).send({ status: false, msg: 'No such user exists' });
        }
        // Verify JWT token
        let decodedToken = jwt.verify(token, "functionup-radon");
        let userloggedin = decodedToken.userId
        if (userid != userloggedin)
            return res.status(403).send({ status: false, msg: "User has not the authorisation to continue the request" });


        else
            next()
    }
    catch (err) {
        res.status(400).send({ msg: err.message });
        console.log("The error is: ", err.message);
    }
}



module.exports.auth = auth