const express=require("express");

const app=express();



app.get("/",(req,res)=>{
    res.send("Api is working");
})

app.get("/home",(req,res)=>{
    res.send("Home page");
})

app.listen(8080,()=>{
    console.log("server is running on port 8080")
})