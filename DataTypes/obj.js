//!-----------------Practice----------------
// let student = {
    //     name : "Nithin",
//     age :26,
//     skill : ["html","css","js","sql"] 
// };
// console.log(student.skill[0]);
// student.skill.map((val)=>{
//     console.log(val);
// })
    


//!-----------------Practice----------------
// let student = {
    //     name : "Nithin",
//     age :26,
//     skill : ["html","css","js","sql"],
//     rating:{
//         html:1
//     }
// };
// console.log(student.rating.html);
    
    
//!-----------------Practice----------------

// let student = [
//     {
//         name:"Anish",
//         age:26,
//         skill:["html","css","js"]
//     },{
//         name:"Manish",
//         age:25,
//         skill:["sql","java","aws"]
//     },{
//         name:"Danish",
//         age:27,
//         skill:["python","django","git"]
//     }
// ]

// student.map((val)=>{
//    val.skill.map((v)=>{
//         console.log(v);  
//    });
// });


//!-----------------Practice----------------

// let data = {
// student:[
//     {
//         name:"Anish",
//         age:26,
//         skill:["html","css","js"]
//     },{
//         name:"Manish",
//         age:25,
//         skill:["sql","java","aws"]
//     },{
//         name:"Danish",
//         age:27,
//         skill:["python","django","git"]
//     }
// ]
// };

// data.student.map((val)=>{
//     val.skill.map((v)=>{
//         console.log(v);  
//     })
// })

//!------------Object Methods--------------
let emp = {
    name:"Anish",
    age:26,
    skills:["html","css","js"]
}

// let objkeys = Object.keys(emp);            //!--------1
// console.log(objkeys);

// let objval = Object.values(emp);           //!--------2   
// console.log(objval);

// Object.freeze(emp);                        //!--------3
// emp.city='Hyderabad';
// emp.age = 28;
// delete emp.name;
// console.log(emp);
// console.log(Object.isFrozen(emp));         //!--------4

// Object.seal(emp);                          //!--------5
// emp.city='Hyderabad';
// emp.age = 28;
// delete emp.name;
// console.log(emp);
// console.log(Object.isSealed(emp));         //!--------6

let product = {
    barnd: "snitch",
    price: 2000
}

// console.log(product);
// let product1 = Object.assign(product);     //!--------7------Shallow Copy
// product1.barnd="AllenSolly"
// console.log(product1);
// product.barnd="UCB";
// console.log(product);

// let a = Object.hasOwn(product,"barnd");    //!--------8
// console.log(a);

// let b = Object.entries(product);           //!--------9
// console.log(b);

//!-----------Date & Time - Object Methods---------------10
// let ref = new Date();
// console.log(ref);
// console.log(ref.getFullYear());
// console.log(ref.getMonth());
// console.log(ref.getDay());
// console.log(ref.getHours());
// console.log(ref.getMinutes());
// console.log(ref.getSeconds());
// console.log(ref.getMilliseconds());
// console.log(ref.toLocaleDateString());
// console.log(ref.toLocaleTimeString());

//!-----------Math - Object Methods----------------------11
// let a = Math.PI;
// console.log(a);

// let a =Math.floor(20.6)
// let a =Math.ceil(20.3)
// let a =Math.round(20.4)

// let a =Math.random()
// let a =Math.ceil(Math.random()*10000)
// console.log(a);

// let a =Math.max(2,5,6,88,90,32,54)
// let a =Math.min(2,5,6,88,90,1,32,54)
// console.log(a);

// let a =Math.sqrt(4);
// let a =Math.cbrt(27);

// let a =Math.pow(5,4);
let a =Math.pow(2,16)
console.log(a);
