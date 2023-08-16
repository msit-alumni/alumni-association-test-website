const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const validator = require("validator")
const jwt = require("jsonwebtoken");


const alumniSchema = new mongoose.Schema({
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
    mobile:{
        type:String,
        required:[true , "Please enter your Mobile Number"], 
    },
    tokens:[{
        token:{
            type:String,
        }
    }],
    dob:{
        type:String,
        require:[true,"Please enter your DOB"]
    },
    country:{
        type:String,
        required:[true , "Please enter your country"], 
    },
    state:{
        type:String,
        required:[true,"Please enter your Current state"]
    },
    // latitude:{
    //     type:Number,
    //     required:[true , "Please enter your sector of work"]
    // },
    // longitude:{
    //     type:Number,
    //     required:[true , "Please enter your sector of work"]
    // },
    batch:{
        type:String,
        required:[true,"Please enter your batch"]
    },
    branch:{
        type:String,
        required:[true , "Please enter your branch"]
    },
    shift:{
        type:String,
        required:[true , "Please enter your Shift"]
    },
    image:{
        type:String,
        required:[true , "Please provide an image"]
    },
    company:{
        type:String,
        // required:[true , "Please enter your company"]
    },
    experience:{
        type:Number,
        // required:[true , "Please enter your work experience"]
    },
    designation:{
        type:String,
        // required:[true , "Please enter your designation"]
    },
    sector:{
        type:String,
        // required:[true , "Please enter your sector of work"]
    },
    verified:{
        type:String
    },
    achievement:{
        type:String
    },
    universityName:{
        type:String
    },
    degreeName:{
        type:String
    }
    
})


alumniSchema.pre("save",async function (next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,5)
    }
})


const Alumni= mongoose.model("Alumni",alumniSchema);
module.exports=Alumni;