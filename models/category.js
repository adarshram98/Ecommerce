const mongoose = require("mongooose")

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:40,
        unique: true
    }
},
    {timseStamps : true}
)

module.exports = mongoose.model("Category",categorySchema)