require("dotenv").config();
const express = require("express");
const bodyparser=require("body-parser");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:3000","https://msit-alumni.netlify.app","http://msitalumni.com","https://msitalumni.com","http://34.227.142.6:3000"]
}));

require("./db/conn");
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));
const port = process.env.PORT || 5001;


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

require("./models/news");
require("./models/events");
require("./models/reach");
require("./models/Users/alumni");
require("./models/Users/student");
require("./models/Users/admin");

app.use(require("./routes/loginRoutes/alumniRoutes"));
app.use(require("./routes/loginRoutes/adminRoutes"));
app.use(require("./routes/newsRoutes"));
app.use(require("./routes/eventRoutes"));
app.use(require("./routes/reachRoute"));
app.use(require("./routes/loginRoutes/studentRoutes"));

app.listen(port, '0.0.0.0', ()=>{
    console.log(`listening on port ${port}`);
});