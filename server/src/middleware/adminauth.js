const jwt=require("jsonwebtoken")

const Admin=require("../models/Users/admin")

const auth=async(req,res,next)=>{
    try {
         const token =req.cookies.jwt
         const verifyAdmin=jwt.verify(token,process.env.ADMIN_SECRET_KEY)
         const user=await Admin.findOne({_id:verifyAdmin._id})
         req.token=token
         req.user=user
         console.log(token)
         next()
         
    } catch (error) {
         console.log(error);
       res.status(401).send("error")
    }
}

module.exports=auth