setInterval(()=>{
    let num = Math.round(Math.random()*1000000);
    document.body.style.backgroundColor = `#${num}`;
    document.body.style.transitionDuration = `1s`
},2000);