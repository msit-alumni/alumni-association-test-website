const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect(`mongodb+srv://ahujautkarsh:${process.env.MONGO_DB}@alumni.tcthqow.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log(`success`);
}).catch((e) =>{
    console.log(e);
})