let gp = document.getElementById("gp");
let Parent = document.getElementById("parent");
let child = document.getElementById("child");

//!---------------Bubbling_Phase----------------
gp.addEventListener("click",(e)=>{
    e.stopPropagation();
    gp.style.backgroundColor="green"
    console.log("GP Triggered");
},false);

Parent.addEventListener("click",(e)=>{
    e.stopPropagation();
    Parent.style.backgroundColor="red"
    console.log("Parent Triggered");
},false);

child.addEventListener("click",(e)=>{
    // e.stopPropagation();
    e.stopImmediatePropagation();
    child.style.backgroundColor="blue"
    console.log("Child Triggered");
},false);

child.addEventListener("click",(e)=>{
    console.log("Child triggered again.........");  
})

//!--------------Capturing_phase-----------------
// gp.addEventListener("click",()=>{
//     gp.style.backgroundColor="green"
//     console.log("GP Triggered");
// },true);

// Parent.addEventListener("click",()=>{
//     Parent.style.backgroundColor="red"
//     console.log("Parent Triggered");
// },true);

// child.addEventListener("click",()=>{
//     child.style.backgroundColor="blue"
//     console.log("Child Triggered");
// },true);