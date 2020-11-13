const User = require("../models/user");
const { check, validationResult } = require("express-validator");
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

exports.signUp = (req, res) => {
  //console.log("wew")
  const user = new User(req.body);

  //check for validation errors and throw them
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  //saving user to database
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "Not able to add user in DB",
      });
    }
    res.json(user);
  });
};

//login route
exports.logIn = (req, res) => {
  const {email,password} = req.body;

  //check for validation errors and throw them
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  User.findOne({email},(err,user)=>{
    if(err || !user)
    {
      return res.status(400).json({
        error:"User not found"
      })
    }
    if(!user.authenticate(password)){
      return res.status(401).json({
        error:"Email and password do not match"
      })
    }
    // create token
    const token = jwt.sign({_id:user._id},process.env.HASH)

    // put token in cookie
    res.cookie("token",token,{expire : new Date()+9999})

    //send resp to front end
    const {_id,name,email,role} = user;
    return res.json({token,user:{_id,name,email,role}})
  })
};

exports.signOut = (req, res) => {
  //console.log("wew")
  res.send("Sign out successful");
};