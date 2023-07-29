const mongoose = require("mongoose");
const  express = require("express");
const router = express.Router();
const News=mongoose.model("News")
const adminauth = require("../middleware/adminauth")


// router.get("/getAllnews",async(req,res)=>{
//     const news = News.find();
//     res.status(200).json({
//         success:true,
//         news,
//     })
// });

router.get("/getAllNews", async (req, res) => {
    try {
      const news = await News.find().exec();
      console.log(req);
      res.json({
        success: true,
        news,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  });


router.post("/admin/postNews",adminauth,async(req,res)=>{
    try{
        const {title , date, desc , image, category }  = req.body;

        const news = new News({
            title,
            date,
            desc,
            image,
            category
        })
        news.save();
    }
    catch(e){
        res.status(400).send("Invalid Details")
    }
});


module.exports=router;