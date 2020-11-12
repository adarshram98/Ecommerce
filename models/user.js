var mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require('uuid');
uuidv4();

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 33,
    trim: true,
  },
  lastName: {
    type: String,
    maxlength: 33,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  userinfo: {
    type: String,
    trim: true,
  },
  encrypted_password: {
    type: String,
    required: true,
  },
  salt: String,
  role: {
    type: Number,
    default: 0,
  },
  purchases: {
    type: Array,
    default: 0,
  },
},
{timseStamps : true}
);

userSchema.virtual("password")
    .set(function(password){
        this._pass=password
        this.salt = uuidv4();
        this.encrypted_password = this.encryptPassword(password)
    })
    .get(function(){
        this._pass
    })

userSchema.method = {

    authenticate: function(plainpassword)
    {
        return  this.encryptPassword(plainpassword) === this.encrypted_password
    },
  encryptPassword: function (passwword) {
    if (!passwword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(passwword)
        .digest("hex");
    } catch (error) {
      return "";
    }
  },
};
module.exports = mongoose.model("User", userSchema);
