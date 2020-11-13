const { Router } = require("express");
const { check,validationResult} = require('express-validator');
 
var express = require("express");
var router = express.Router();

const {signOut,signUp,logIn} = require("../controllers/authentication")

router.get("/signout",signOut);


router.post("/signup",[
    check("name").isLength({min:2}).withMessage("Name should be atleast 2 charecter"),
    check("email").isEmail().withMessage("email is required"),
    check("password").isLength({min:5}).withMessage("Min lenght 5")
],signUp)

router.post("/login",[
    check("email").isEmail().withMessage("email is required"),
    check("password").isLength({min:1}).withMessage("Password is required")
],logIn)



module.exports = router;