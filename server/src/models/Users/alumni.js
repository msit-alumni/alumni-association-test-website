const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const validator = require("validator")


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
    mobileNo:{
        type:String,
        required:[true , "Please enter your Mobile Number"], 
    },
    tokens:[{
        token:{
            type:String,
        }
    }],
    DOB:{
        type:String,
        require:[true,"Please enter your DOB"]
    },
    course:{
        type:String,
        required:[true , "Please enter your course"], 
    },
    city:{
        type:String,
        required:[true,"Please enter your Current City"]
    },
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
    company:{
        type:String,
        required:[true , "Please enter your company"]
    },
    experience:{
        type:Number,
        required:[true , "Please enter your work experience"]
    },
    desig:{
        type:String,
        required:[true , "Please enter your designation"]
    },
    sector:{
        type:String,
        required:[true , "Please enter your sector of work"]
    },
    verified:{
        type:Boolean
    }
    
})


// alumniSchema.methods.generateAuthTokenAlumni=async function(){
//     try{
//         console.log(this._id);
//         const token= jwt.sign({_id:this._id.toString()},process.env.ALUMNI_SECRET_KEY)
//         this.tokens=this.tokens.concat({token:token})
//         await this.save()
//         return token
//     }
//     catch(error){
//         res.send("error"+error)
//         console.log("error"+error);
//     }
// }


alumniSchema.pre("save",async function (next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,5)
    }
})


const Alumni= mongoose.model("Alumni",alumniSchema);
module.exports=Alumni;