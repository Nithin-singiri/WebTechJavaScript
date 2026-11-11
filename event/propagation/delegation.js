
let fr = document.getElementById("fruits")
fr.addEventListener("click",(e)=>{
    if(e.target.className="deleteButton"){
        console.log(e.target.parentElement);
        e.target.parentElement.remove();  
    }
});