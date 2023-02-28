const express = require("express");
const mongoose=require("mongoose")
const Admin = mongoose.model("Admin");
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/signupAdmin", async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;
    Admin.findOne({ email: email }).then((savedStudent) => {
      if (savedStudent) {
        return res.status(422).json({ error: "Admin already exist" });
      }
    });

    const admin = new Admin({
      email,
      password
    });
    // const token=await Student.generateAuthTokenStudent()

    // res.cookie("jwt",token,{
    //    expires:new Date(Date.now()+3000000),
    //    httpOnly:true
    // })
    await admin.save();
  } catch (e) {
    console.log(e);
    res.status(400).send("Invalid Details");
  }
});

router.get("/signinAdmin",async(req,res)=>{
    try {
        const {
          email,
          password
        } = req.body;
        const id=await Admin.findOne({email:email});
    //     const token=await id.generateAuthTokenStudent()
    //    res.cookie("jwt",token,{
    //     expires:new Date(Date.now()+3000000),
    //     httpOnly:true
    //  })
        const isMatch=await bcrypt.compare(password,id.password)
        if(isMatch){
            res.status(201).redirect("/index")
            console.log("login success")
           }
           else{
            res.send("Invalid login details")
           }
      } catch (e) {
        console.log(e);
        res.status(400).send("Invalid Details");
      }
})
module.exports=router;
