const  express = require("express");
const mongoose=require("mongoose")
const router = express.Router();
const event=mongoose.model("Events")

// if(adminauth)
// {
//   router.get("/admin/postEvent", async (req, res) => {
//   });
// }
router.get("/AllEvent", async (req, res) => {
    try {
      const events = await event.find().exec();
      res.json({
        success: true,
        events,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  });


router.post("/admin/postEvent",async(req,res)=>{
    try{
        const {title , location , date, status, category , desc , image }  = req.body;
        

        const events = new event({
            title,
            location,
            date,
            status,
            category,
            desc,
            image
        })
        events.save();
        console.log("event uploaded");
    }
    catch(e){
        res.status(400).send("Invalid Details")
    }
});


module.exports=router;