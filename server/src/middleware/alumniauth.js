// const jwt=require("jsonwebtoken")

// const Admin=require("../models/admin")

// const auth=async(req,res,next)=>{
//     try {
//          const token =req.cookies.jwt
//          const verifyAdmin=jwt.verify(token,process.env.ADMIN_SECRET_KEY)
//          const user=await Admin.findOne({_id:verifyAdmin._id})
//          req.token=token
//          req.user=user
//          next()
//     } catch (error) {
//          console.log(error);
//        res.status(401).send(error)
//     }
// }

// module.exports=auth

const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Alumni = mongoose.model("Alumni");

module.exports = (req, res, next) => {
   const { authorization } = req.headers
  
   if (!authorization) {
      return res.status(401).json({ error: "you must be logged in" })
   }
   const token = authorization.replace("Bearer ", "");
   console.log(token);
   jwt.verify(token, process.env.ALUMNI_SECRET_KEY, (err, payload) => {
      if (err) {
         console.log(err);
         return res.status(401).json({ error: "you must be logged in 878" })
      }
      const { _id } = payload
      Alumni.findById(_id).then(userdata => {
         req.user = userdata
         next()
      })

   })
}