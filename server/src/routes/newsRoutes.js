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


router.post("/admin/postNews",async(req,res)=>{
    try{
      const {title , date, desc , pic }  = req.body;
      console.log(title,date,desc,pic)
        const news = new News({
            title,
            date,
            desc,
            image:pic,
        })
        news.save()
        .then(result=>{
          console.log("news uploaded")
          res.json({news:result})
      }).catch(err=>{
          console.log(err);
      })
       
    }
    catch(e){
        res.status(400).send("Invalid Details")
    }
});


module.exports=router;