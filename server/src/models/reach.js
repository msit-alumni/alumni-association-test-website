const mongoose=require("mongoose")
const validator = require("validator")


const reachSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true , "Please enter your email"],
        unique:true,
        validate:validator.isEmail,
    },
    message:{
        type:String,
        required:[true , "Please enter your message"]   
    },
    // countryCode:{
    //     type: Number,
    //     required: true   
    // },
    
    phone:{
        type:String,
        required:[true , "Please enter your number"] 
    }
})

const Reach= mongoose.model("Reach",reachSchema);
module.exports=Reach;