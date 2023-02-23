import mongoose from "mongoose";
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const validator = require("validator")

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "Please enter your name"],
    },
    email:{
        type:String,
        required:[true , "Please enter your email"],
        unique:true,
        validate:validator.isEmail,
    },
    password:{
        type:String,
        required:[true , "Please enter your password"], 
        minLength:[8,"password must be atleast 8 characters"],
    },
    mobileNo:{
        type:String,
        required:[true , "Please enter your Mobile Number"], 
        minLength:[10,"enter a valid Mobile Number"]
    },
    DOB:{
        type:Date,
        require:[true,"Please enter your DOB"]
    },
    course:{
        type:String,
        required:[true , "Please enter your course"], 
    },
    batch:{
        type:String,
        required:[true,"Please enter your batch"]
    },
    branch:{
        type:String,
        required:[true , "Please enter your branch"]
    },
    
})


schema.pre("save",async function (next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,5)
    }
})


const User=new mongoose.model("User",schema);
module.exports=User;