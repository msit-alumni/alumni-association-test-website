const jwt=require("jsonwebtoken")

const Student=require("../models/student")

const auth=async(req,res,next)=>{
    try {
         const token =req.cookies.jwt
         const verifyStudent=jwt.verify(token,process.env.STUDENT_SECRET_KEY)
         const user=await Student.findOne({_id:verifyStudent._id})
         req.token=token
         req.user=user
         next()
    } catch (error) {
         console.log(error);
       res.status(401).send(error)
    }
}

module.exports=auth