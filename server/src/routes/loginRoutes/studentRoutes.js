const express = require("express");
const mongoose=require("mongoose")
const Student=require("../../models/Users/student")
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken");
const router = express.Router();
const studentauth=require("../../middleware/studentauth")

router.post("/signupStudent", async (req, res) => {

    try {
      const {
        name,
      email,
      password,
      mobile,
      image,
      dob,
      course,
      batch,
      branch,
      shift
      } = req.body;
      console.log(name,email,mobile,shift)
  
      Student.findOne({ email: email }).then((savedStudent) => {
        if (savedStudent) {
          return res.status(422).json({ error: "Student already exist" });
        }
      });
  
      const student = new Student({
        name,
      email,
      password,
      mobile,
      image,
      dob,
      course,
      batch,
      branch,
      shift
      });
      await student.save();
      console.log("student registered")
    } catch (e) {
      console.log(e);
      res.status(400).send("Invalid Details");
    }
  });
  

  router.post("/signinStudent",async(req,res)=>{
    const{email,password} = req.body;
if(!email || !password){
    return res.status(422).json({error:"please add all the fields"})
}
Student.findOne({email:email}).then(savedUser=>{
    if(!savedUser){
       return res.status(422).json({error:"invalid email or password"})
    }
    bcrypt.compare(password,savedUser.password).then(doMatch=>{
        if(doMatch){
            console.log("successfully signin")
            const token = jwt.sign({_id:savedUser._id},process.env.STUDENT_SECRET_KEY);
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

router.get("/student/profile", studentauth , async (req, res) => {
  const student = await Student.findById(req.user._id);
  res.status(200).json({
    success:true,
    student
  })
})


module.exports=router;
