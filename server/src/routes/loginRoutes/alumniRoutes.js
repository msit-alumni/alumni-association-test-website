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
        branch,
        shift,
        company,
        experience,
        sector,
        designation
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
        shift,
        company,
        experience,
        sector,
        designation
      });
      const token=await alumni.generateAuthTokenAlumni()
     console.log(token)
      res.cookie("jwt",token,{
         expires:new Date(Date.now()+3000000),
         httpOnly:true
      })
      await alumni.save();
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

module.exports=router;