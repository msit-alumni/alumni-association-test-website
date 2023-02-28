const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const validator = require("validator")


const adminSchema = new mongoose.Schema({
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


adminSchema.pre("save",async function (next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,5)
    }
})


const Admin= mongoose.model("Admin",adminSchema);
module.exports=Admin;