let btn = document.getElementById("btn")
mode = true;
btn.addEventListener("click",()=>{
    if(mode == true){
        mode = false;
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        btn.innerText="Light Mode"
    }else{
        mode = true;
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        btn.innerText="Dark Mode"
    }
});