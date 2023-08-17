const express = require("express");
const mongoose=require("mongoose")
const Alumni=require("../../models/Users/alumni")
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken");
const router = express.Router();
const alumniauth=require("../../middleware/alumniauth")

router.post("/signupAlumni", async (req, res) => {

    try {
      const {
        name,
        email,
        password,
        mobile,
        dob,
        country,
        state,
        batch,
        image,
        branch,
        shift,
        company,
        experience,
        sector,
        designation,
        verified,
        universityName,
        achievement,
        degreeName
      } = req.body;
      console.log(name,email,mobile,shift,company)
  
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
        country,
        state,
        batch,
        branch,
        image,
        shift,
        company,
        experience,
        sector,
        designation,
        verified,
        universityName,
        achievement,
        degreeName
      });
     
    
    
      await alumni.save();
      console.log("alumni registered");
      res.status(200).json({
        success:true,
        alumni
      })
    } catch (e) {
      console.log(e);
      res.status(400).send("Invalid Details");
    }
  });
  

  router.post("/signinAlumni",async(req,res)=>{
    const{email,password} = req.body;
if(!email || !password){
    return res.status(422).json({error:"please add all the fields"})
}
  Alumni.findOne({email:email}).then(savedUser=>{
    if(!savedUser){
       return res.status(422).json({error:"invalid email or password"})
    }
    bcrypt.compare(password,savedUser.password).then(doMatch=>{
        if(doMatch){
            console.log("successfully signin")
            const token = jwt.sign({_id:savedUser._id},process.env.ALUMNI_SECRET_KEY);
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
router.delete("/delete", async (req, res) => {

  try {
    const result = await Alumni.deleteOne( {_id: req.body.alumniId});
    console.log(result)
  } catch (error) {
    console.log(error)
  }
})
router.get("/alumni/profile", alumniauth , async (req, res) => {
  const alumni = await Alumni.findById(req.user._id);
  res.status(200).json({
    success:true,
    alumni
  })
})
router.put("/updateprofile", async (req, res) => {

  try {
    console.log(req.body.achievement);
    const result = await Alumni.findByIdAndUpdate(req.body.alumniId, { $set: { achievement:req.body.achievement } }, { new: true });
  result.save();
    // console.log(result)
  console.log("updated")
  } catch (error) {
    console.log(error)
  }
})


module.exports=router;
