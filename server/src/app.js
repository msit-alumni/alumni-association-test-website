const express = require("express");
const bodyparser=require("body-parser");
const app = express();

require("./db/conn");
app.use(bodyparser.urlencoded({extended:true}));
const port = process.env.PORT || 3000;


app.use(express.json())
app.use(express.urlencoded({extended:false}))

require("./models/news");
require("./models/events");
require("./models/alumni");
require("./models/student");

app.use(require("./routes/alumniRoutes"));
app.use(require("./routes/newsRoutes"));
app.use(require("./routes/eventRoutes"));
app.use(require("./routes/studentRoutes"));

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});