const  express = require("express");
const mongoose=require("mongoose")
const router = express.Router();
const reach=mongoose.model("Reach")

router.post("/postmessage",async(req,res)=>{
    try{
        const { name, email, message, phone }  = req.body;

        const reachs = new reach({
           name,
           email,
           message,
           phone
        })
        reachs.save();
    }
    catch(e){
        res.status(400).send("Invalid Details")
    }
});
module.exports=router;