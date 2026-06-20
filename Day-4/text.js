// function greet(name){
//     return "Hi, " + name;
// }
// console.log(greet("Alice"));
// const greet = (name) => "Hi, " + name;
// console.log(greet("Alice"));

//call back function->calling inside another funtion
// function display(result){
//     console.log(result);
// }

// function add(a,b,callback){
//     let sum = a + b;
//     callback(sum);
// }
// add(10,15,display);

// console.log("start");
// !asynchronous function
// setTimeout(()=>{
//     console.log("This is an asynchronous function");
// },3000);
// console.log("end");

// //!Promise -> status,resolved,rejected,pending 
// //having methods like then,catch,finally
// let mypromise = new Promise((resolve,reject)=>{
//     let success=true;

//     if(success){
//         resolve("Login Success");
//     }else{
//         reject("Login Failed");
//     }
// });

// mypromise.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("This will always execute");
// });

//asunc and await
//waiting for 2 seconds 
//await with promise resolution 
//this is cleaner than then()
//used in modern node js 
function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data resolved");
        }, 2000);
    });
}
async function getData(){
    let result = await fetchData();
    console.log(result);
}
getData();