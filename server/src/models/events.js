const mongoose=require("mongoose")

const events = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    category:{
        type:String,
        // required:true
    },
    date:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})


mongoose.model("Events",events);
