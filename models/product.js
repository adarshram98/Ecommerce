const mongoose  = require('mongoose');
const {ObjectId} = mongoose.Schema;

const productSchema= new mongoose.Schema({

    name:{
        type:String,
        trim: true,
        required:true,
        maxlength:32
    },
    description:{
        type:String,
        trim:true,
        required:true,
        maxlength:3000
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    category:{
        type:ObjectId,
        ref:"Category",
        required:true
    },
    stock:{
        type:Number
    },
    sold:{
        type:Number,
        default:0
    },
    photo:{
        data : Buffer,
        contentType:String
    }
},
{timeStamp:true})