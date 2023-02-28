const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const validator = require("validator")


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
    mobileNo:{
        type:String,
        required:[true , "Please enter your Mobile Number"], 
    },
    DOB:{
        type:String,
        require:[true,"Please enter your DOB"]
    },
    course:{
        type:String,
        required:[true , "Please enter your course"], 
    },
    // tokens:[{
    //     token:{
    //         type:String,
    //     }
    // }],
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


// studentSchema.methods.generateAuthTokenStudent=async function(){
//     try{
//         const user=this
//         console.log(user._id);
//         const token= jwt.sign({_id:user._id.toString()},process.env.STUDENT_SECRET_KEY)
//         user.tokens=user.tokens.concat({token})
//         await user.save()
//         // console.log("hello");
//         return token
//     }
//     catch(error){
//         // res.send("error"+error)
//         console.log("error"+error);
//     }
// }



studentSchema.pre("save",async function (next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,5)
    }
})


 mongoose.model("Student",studentSchema);
