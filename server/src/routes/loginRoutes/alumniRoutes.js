const express = require("express");
const mongoose=require("mongoose")
const Alumni = mongoose.model("Alumni");
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
      Student.findOne({ email: email }).then((savedAlumni) => {
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
  
module.exports=router;