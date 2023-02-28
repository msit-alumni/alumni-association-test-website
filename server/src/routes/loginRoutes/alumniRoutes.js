const express = require("express");
const mongoose=require("mongoose")
const Alumni = mongoose.model("Alumni");
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/signupAlumni", async (req, res) => {
    try {
      const {
        name,
        email,
        password,
        mobileNo,
        DOB,
        course,
        city,
        batch,
        branch,
        shift,
        company,
        experience,
        sector,
        desig
      } = req.body;
  console.log(name)
      Alumni.findOne({ email: email }).then((savedAlumni) => {
        if (savedAlumni) {
          return res.status(422).json({ error: "Alumni already exist" });
        }
      });
  
      const alumni = new Alumni({
        name,
        email,
        password,
        mobileNo,
        DOB,
        course,
        city,
        batch,
        branch,
        shift,
        company,
        experience,
        sector,
        desig
      });
      // const token=await Student.generateAuthTokenStudent()
  
      // res.cookie("jwt",token,{
      //    expires:new Date(Date.now()+3000000),
      //    httpOnly:true
      // })
      await alumni.save();
    } catch (e) {
      console.log(e);
      res.status(400).send("Invalid Details");
    }
  });
  

  router.get("/signinAlumni",async(req,res)=>{
    try {
        const {
          email,
          password
        } = req.body;
        const id=await Alumni.findOne({email:email});
    //     const token=await id.generateAuthTokenStudent()
    //    res.cookie("jwt",token,{
    //     expires:new Date(Date.now()+3000000),
    //     httpOnly:true
    //  })
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