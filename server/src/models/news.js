const mongoose=require("mongoose")

const news = new mongoose.Schema({
    title:{
        type:String,
        // required:true
    },
    date:{
        type:String,
        // required:true
    },
    desc:{
        type:String,
        // required:true
    },
    image:{
        type:String,
        // required:true
    }
    // category:{
    //     type:String
    // }
})

mongoose.model("News",news);
