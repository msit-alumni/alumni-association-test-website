const mongoose = require("mongoose");
const  express = require("express");
const router = express.Router();
const News=mongoose.model("News")



router.get("/getAllnews",async(req,res)=>{
    const news = News.find();
    res.status(200).json({
        success:true,
        news,
    })
});


router.post("/news",async(req,res)=>{
    try{
        const {title , location , date, time , desc , image }  = req.body;

        const news = new News({
            title,
            date,
            time,
            desc,
            image
        })
        news.save();
    }
    catch(e){
        res.status(400).send("Invalid Details")
    }
});


module.exports=router;