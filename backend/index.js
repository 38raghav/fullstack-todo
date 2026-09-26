const express = require("express");
const mongoose = require("mongoose");
const app = express();

async function connectDB(){
    await mongoose.connect("mongodb://127.0.0.1:27017/git-learn");
    console.log("Mongo DB conncted");
}

app.use(express.json());
app.use(cors());

connectDB();


app.get("/",(req,res)=>{
    res.send("Hello World");
})


app.post("/addItem",async(req,res)=>{
    console.log(req.body);
})









app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})