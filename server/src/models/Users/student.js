const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const validator = require("validator")
const jwt = require("jsonwebtoken");


const studentSchema = new mongoose.Schema({
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
    password:{
        type:String,
        required:[true , "Please enter your password"], 
        minLength:[8,"password must be atleast 8 characters"],
    },
    mobile:{
        type:String,
        required:[true , "Please enter your Mobile Number"], 
    },
    dob:{
        type:String,
        require:[true,"Please enter your DOB"]
    },
    course:{
        type:String,
        required:[true , "Please enter your course"], 
    },
    tokens:[{
        token:{
            type:String,
        }
    }],
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
    }
    
})

studentSchema.methods.generateAuthTokenStudent=async function(){
    try{
        const token= jwt.sign({_id:this._id.toString()},process.env.STUDENT_SECRET_KEY)
        this.tokens=this.tokens.concat({token:token})
        await this.save()
        return token
        
    }
    catch(error){
        console.log(error);
    }
}



studentSchema.pre("save",async function (next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,5)
    }
})


const Student= mongoose.model("Student",studentSchema);
module.exports=Student;
