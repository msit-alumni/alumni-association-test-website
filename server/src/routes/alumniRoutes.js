const  express = require("express");
const jwt  = require("jsonwebtoken");
const router = express.Router();


router.post("/signup",async(req,res)=>{
    const {name , email , password }  = req.body;
    
});
module.exports=router;