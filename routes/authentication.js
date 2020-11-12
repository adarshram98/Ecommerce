const { Router } = require("express");

var express = require("express");
var router = express.Router();

const {signOut,signUp} = require("../controllers/authentication")

router.get("/signout",signOut);

module.exports = router;

router.post("/signup",signUp)