const express=require("express");
const bodyParser=require("body-parser");
const nodemailer=require("nodemailer");
const cors=require("cors");
const path = require("path");
const router=require("./routes/routes");

const app=express();
const port=5001;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port,function(){
    console.log("Server is running on port : ",port);
})