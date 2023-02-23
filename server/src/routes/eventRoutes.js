const  express = require("express");
const router = express.Router();
const event = mongoose.model("./models/events")


router.get("/getAllevent",async(req,res)=>{
    const events = event.find();
    res.status(200).json({
        success:true,
        events,
    })
});


router.post("/event",async(req,res)=>{
    try{
        const {title , location , date, time , desc , image }  = req.body;

        const events = new event({
            title,
            location,
            date,
            time,
            desc,
            image
        })
        events.save();
    }
    catch(e){
        res.status(400).send("Invalid Details")
    }
});


export default router;