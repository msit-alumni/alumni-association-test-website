const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://ahujautkarsh:CzGD55XGCgFB3t7H@alumni.tcthqow.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log(`success`);
}).catch((e) =>{
    console.log(e);
})