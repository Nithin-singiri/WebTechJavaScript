let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    let num= Math.ceil(Math.random() * 1000000);
    document.body.style.backgroundColor=`#${num}`;
    // console.log(num);
});