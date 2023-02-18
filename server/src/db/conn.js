const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/register",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log(`success`);
}).catch((e) =>{
    console.log(e);
})