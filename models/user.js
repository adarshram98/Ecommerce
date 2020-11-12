var mongoose = require("mongoose");



  var userSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
        maxlength:33,
        trim:true
    },
    lastName:{
        type :String,
        maxlength:33,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    userinfo:{
        type:String,
        trim:true
    },
    password:{
        type : String,
        trim:true
    },
    salt:String,
    role:{
        type:Number,
        default:0
    },
    purchases:{
        type:Array,
        default:0
    }
    
  });

  module.exports = mongoose.model("User",userSchema)