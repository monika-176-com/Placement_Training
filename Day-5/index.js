const express=require('express');
const app=express();
app.get('/studentdata',(req,res)=>{
    const student={
        id:10,
        name: "Monika",
        course: "BTech"
    };
    res.json(student);
});
app.get('/student/:id',(req,res)=>{
    let studentId=req.params.id;
    req.send(`Student ID: ${studentId}`);
});
app.get("/search",(req,res)=>{
    let name=req.query.name;
    res.send("Searching for:"+name);
});
app.listen(5000,()=>{   
    console.log("Server is running on port 5000");
});