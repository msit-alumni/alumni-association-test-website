const  express = require("express");
const router = express.Router();
const news = mongoose.model("./models/news")


router.get("/getAllnews",async(req,res)=>{
    const news = news.find();
    res.status(200).json({
        success:true,
        news,
    })
});


router.post("/news",async(req,res)=>{
    try{
        const {title , location , date, time , desc , image }  = req.body;

        const news = new event({
            title,
            date,
            desc,
            image
        })
        news.save();
    }
    catch(e){
        res.status(400).send("Invalid Details")
    }
});


export default router;