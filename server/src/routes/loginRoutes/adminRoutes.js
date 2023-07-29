const express = require("express");
const mongoose=require("mongoose")
const Admin=require("../../models/Users/admin")
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken");
const router = express.Router();
const adminauth=require("../../middleware/adminauth")

router.post("/signupAdmin", async (req, res) => {

    try {
      const {
      email,
      password
      } = req.body;
  
      Admin.findOne({ email: email }).then((savedAdmin) => {
        if (savedAdmin) {
          return res.status(422).json({ error: "Admin already exist" });
        }
      });
  
      const admin = new Admin({
      email,
      password
      });
      await admin.save();
      console.log("admin registered")
    } catch (e) {
      console.log(e);
      res.status(400).send("Invalid Details");
    }
  });
  

  router.post("/signinAdmin",async(req,res)=>{
    const{email,password} = req.body;
if(!email || !password){
    return res.status(422).json({error:"please add all the fields"})
}
Admin.findOne({email:email}).then(savedUser=>{
    if(!savedUser){
       return res.status(422).json({error:"invalid email or password"})
    }
    bcrypt.compare(password,savedUser.password).then(doMatch=>{
        if(doMatch){
            console.log("successfully signin")
            const token = jwt.sign({_id:savedUser._id},process.env.ADMIN_SECRET_KEY);
            console.log(token)
            const {_id , name , email} = savedUser
            res.json({token , user:{_id , name,email}})
        }
        else{
            return res.status(422).json({error:"invalid email or password"})
        }
    }).catch(err=>{
        console.log(err);
    })
  })
});


module.exports=router;
