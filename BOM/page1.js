function openPage(){
    window.open('./page2.html');
}
//!------------------Location-------------------------------
document.querySelector("#nextPage2").addEventListener("click",()=>{
    window.location.href="./page2.html"
})

console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.origin);
console.log(location.pathname);
console.log(location.protocol);


//!------------------History--------------------------------
function nextPage() {
    window.history.forward()
}

//!------------------Navigator------------------------------
console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.platform);
console.log(navigator.onLine);


//!------------------Console--------------------------------
console.log("Hii");
console.error("Hii");
console.warn("Hii");
console.info("Hii")

let arr = ["html","CSS","JS"]
console.table(arr)

//!------------------Screen---------------------------------
console.log(screen.availHeight);
console.log(screen.availWidth);
console.log(screen.height);
console.log(screen.width);
