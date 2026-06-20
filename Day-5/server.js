const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("Express Server is Running");
});
app.get('/home',(req,res)=>{
    res.send("Home page");
})
app.get('/about',(req,res)=>{
    res.send("About Page")
})
app.get('/contact',(req,res)=>{
    res.send("contact Page")
})
app.listen(3000,()=>{   
    console.log("Server is running on port 3000");
});