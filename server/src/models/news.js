import mongoose from "mongoose";

const news = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    date:{
        type:Date,
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


module.exports=news;