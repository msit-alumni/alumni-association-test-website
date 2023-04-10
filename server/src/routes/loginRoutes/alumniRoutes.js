const express = require("express");
const mongoose=require("mongoose")
const Alumni=require("../../models/Users/alumni")
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/signupAlumni", async (req, res) => {

    try {
      const {
        name,
        email,
        password,
        mobile,
        dob,
        course,
        city,
        batch,
        image,
        branch,
        shift,
        company,
        experience,
        sector,
        designation,
        verified
      } = req.body;
  console.log(email,password,course,batch,branch)
      Alumni.findOne({ email: email }).then((savedAlumni) => {
        if (savedAlumni) {
          return res.status(422).json({ error: "Alumni already exist" });
        }
      });
  
      const alumni = new Alumni({
        name,
        email,
        password,
        mobile,
        dob,
        course,
        city,
        batch,
        branch,
        image,
        shift,
        company,
        experience,
        sector,
        designation,
        verified
      });
      const token=await alumni.generateAuthTokenAlumni()
     console.log(token)
      res.cookie("jwt",token,{
         expires:new Date(Date.now()+3000000),
         httpOnly:true
      })
      await alumni.save();
      console.log("alumni registered")
    } catch (e) {
      console.log(e);
      res.status(400).send("Invalid Details");
    }
  });
  

  router.post("/signinAlumni",async(req,res)=>{
    try {
        const {
          email,
          password
        } = req.body;
        const id=await Alumni.findOne({email:email});
        const token=await id.generateAuthTokenAlumni()
       res.cookie("jwt",token,{
        expires:new Date(Date.now()+3000000),
        httpOnly:true
     })
        const isMatch=await bcrypt.compare(password,id.password)
        if(isMatch){
          console.log("login Success");
            res.status(201).redirect("/index")
           }
           else{
            res.send("Invalid login details")
           }
      } catch (e) {
        res.status(400).send("Invalid Details");
      }
})
router.get("/AllAlumni", async (req, res) => {
  try {
    const alumnis = await Alumni.find().exec();
    res.json({
      success: true,
      alumnis,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

router.put("/Verify", async (req, res) => {

  try {
   
    const result = await Alumni.findByIdAndUpdate(req.body.alumniId, { $set: { verified: "true" } }, { new: true });
    console.log(result)
  } catch (error) {
    console.log(error)
  }
})
router.get("/myprofile", async (req, res) => {
  Alumni.find({_id:req.user._id}).then(myprofile=>{
    res.json({myprofile})
}).catch(err=>{
   console.log(err);
})
})


module.exports=router;
