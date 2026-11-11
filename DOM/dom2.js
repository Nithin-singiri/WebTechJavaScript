//!------------------------DOM-Methods------------------------------

// let a = document.getElementById("root")              //!--------1
// console.log(a);
// a.style.backgroundColor = "red"

// let a = document.getElementsByClassName("content");  //!--------2 
// console.log(a);
// a.item(2).style.backgroundColor = "red"
// a[0].style.backgroundColor = "red"

// let b = Array.from(a);
// b.map((val)=>{
//     val.style.backgroundColor = "red";
// });

// let a = document.getElementsByTagName("div");       //!--------3
// console.log(a);
// a.item(0).style.backgroundColor = "green"

// let root = document.getElementById("root")
// console.log(root.getAttribute("id"));               //!--------4

// root.setAttribute("class","box")                    //!--------5
// console.log(root.getAttribute("class"));

// let a = document.querySelector("#root");            //!--------6
// let a = document.querySelector(".content");
// let a = document.querySelector("div");
// a.style.backgroundColor="yellow";
// console.log(a);

// let a = document.querySelectorAll("#root");         //!--------7
// let a = document.querySelectorAll(".content");
// let a = document.querySelectorAll("#root~.content");
// let a = document.querySelectorAll("div");
// a.item(0).style.backgroundColor = "red";
// console.log(a);

// let root = document.getElementById("root");

// let newElement = document.createElement("h1");      //!--------8
// newElement.innerHTML = "I am newElement";
// newElement.setAttribute("id","box");
// console.log(newElement);

// root.append(newElement);                            //!--------9
// root.appendChild(newElement);                       //!--------10
// root.prepend(newElement);                           //!--------11

// let btn = document.getElementById("btn");
// console.log(btn);
// function info(){
//     alert("I am alert");
// }

// btn.addEventListener("click",info)                  //!--------12
// btn.addEventListener("click",()=>{
//     alert("erthbetgh");
// });

//!----------------------------Task---------------------------------

let btn = document.getElementById("btn");

// let subscribed = true;
// btn.addEventListener("click",()=>{
//     if(subscribed == true){
//         subscribed = false;
//         btn.innerText="Unsubscribe"; 
//     }
//     else{
//         subscribed = true;
//         btn.innerText="Subscribe";
//     }
// });

mode = true;
btn.addEventListener("click",()=>{
    if(mode == true){
        mode = false;
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
    }else{
        mode = true;
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }
});