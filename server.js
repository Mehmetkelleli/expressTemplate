const express = require("express");
const route = require("./routes/index");
const database = require("./database/data");
const dotenv = require("dotenv");

dotenv.config();


const app = express();


app.use("/api",route);


app.listen(process.env.port,()=>{
    connect();
    console.log(`App listen to ${process.env.port}`);
});


