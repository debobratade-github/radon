const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//Q.1:- Create User
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

//Q.2:- Take email and password and generate JWT token
const loginUser = async function (req, res) {
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
  res.send({ status: true, token: token });
};

//Q.3:- Verify JWT token, check userId is present or not and show user details
const getUserData = async function (req, res) {

  // Check userId is present or not in database
  let userDetails = await userModel.findById(req.params.userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

//Q.4:-    Update Attribute age by userId
const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  let updated = await userModel.findById({ _id: userId });
  res.send({ status: updatedUser, Update_data: updated });
};

//Q.5:-    Delete API

const deleteUserData = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }
  chnge = await userModel.findById(userId).updateOne({ isDeleted: true });
  fnl = await userModel.findById({ _id: userId });
  res.send({ msg: fnl })
}


// Add and update attributes  
const getaddData = async function (req, res) {

  let user = await userModel.findById(req.params.userId)
  if (!user) return res.send({ status: false, msg: 'No such user exists' })

  let updatedPosts = user.posts
  let message = req.body.msg
  updatedPosts.push(message);
  let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })


  return res.send({ status: true, data: updatedUser })

}







module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUserData = deleteUserData;
module.exports.getaddData = getaddData;
