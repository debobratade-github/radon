const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


//Q.1:- Create User
const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(200).send({ msg: savedData });
  }
  catch (err) {
    res.status(500).send({ msg: err.message });
    console.log("The error is: ", err.message);
  }
};


//Q.2:- Take email and password and generate JWT token
const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "Radon",
        organisation: "FunctionUp",
      },
      "functionup-radon"
    );
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, token: token });
  }
  catch (err) {
    res.status(500).send({ msg: err.message });
    console.log("The error is: ", err.message);
  }
};


//Q.3:- Verify JWT token, check userId is present or not and show user details
const getUserData = async function (req, res) {
  try {
    let userDetails = await userModel.findById(req.params.userId);
    res.status(200).send({ status: true, data: userDetails });
  }
  catch (err) {
    res.status(500).send({ msg: err.message });
    console.log("The error is: ", err.message);
  }
};


//Q.4:-    Update Attribute age by userId
const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    let updated = await userModel.findById({ _id: userId });
    res.status(200).send({ status: updatedUser, Update_data: updated });
  }
  catch (err) {
    res.status(500).send({ msg: err.message });
    console.log("The error is: ", err.message);
  }
};


//Q.5:-    Delete API
const deleteUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    chnge = await userModel.findById(userId).updateOne({ isDeleted: true });
    fnl = await userModel.findById({ _id: userId });
    res.status(200).send({ msg: fnl })
  }
  catch (err) {
    res.status(500).send({ msg: err.message });
    console.log("The error is: ", err.message);
  }
}


//Q.6:-  Add value in attributes  
const getaddData = async function (req, res) {
  try {
    let user = await userModel.findById(req.params.userId)
    let updatedPosts = user.posts
    let message = req.body.msg
    updatedPosts.push(message);
    let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })
    return res.send({ status: true, data: updatedUser })
  }
  catch (err) {
    res.send({ msg: err.message });
    console.log("The error is: ", err.message);
  }
}



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUserData = deleteUserData;
module.exports.getaddData = getaddData;
