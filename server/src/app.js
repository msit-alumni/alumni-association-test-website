require("dotenv").config();
const express = require("express");
const bodyparser=require("body-parser");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:3000","https://msitalumni-ntt1.onrender.com"]
}));
require("./db/conn");
app.use(bodyparser.urlencoded({extended:true}));
const port = process.env.PORT || 5000;


app.use(express.json())
app.use(express.urlencoded({extended:false}))

require("./models/news");
require("./models/events");
require("./models/Users/alumni");
require("./models/Users/student");
require("./models/Users/admin");

app.use(require("./routes/loginRoutes/alumniRoutes"));
app.use(require("./routes/loginRoutes/adminRoutes"));
app.use(require("./routes/newsRoutes"));
app.use(require("./routes/eventRoutes"));
app.use(require("./routes/loginRoutes/studentRoutes"));

app.listen(port, '0.0.0.0', ()=>{
    console.log(`listening on port ${port}`);
});