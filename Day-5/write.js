const fs=require('fs');
const student="Name: J Monika\nAge: 19\nDepartment: CSE\n";
fs.writeFile("student.txt",student,(err)=>{
    if(err){
        console.log("Error:", err);
        return;
    }
    console.log("File create successfully");
});