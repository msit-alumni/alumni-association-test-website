const express = require("express");
const app = express();

require("./db/conn");

const port = process.env.PORT || 3000;

app.use(require("./routes/userRoutes"));
app.use(require("./routes/newsRoutes"));
app.use(require("./routes/eventRoutes"));

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});