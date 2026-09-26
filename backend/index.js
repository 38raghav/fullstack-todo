const express = require("express");
const mongoose = require("mongoose");
const app = express();

async function connectDB(){
    await mongoose.connect("mongodb://127.0.0.1:27017/git-learn");
    console.log("Mongo DB conncted");
}

connectDB();


app.get("/",(req,res)=>{
    res.send("Hello World");
})









app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})