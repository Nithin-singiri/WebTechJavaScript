async function fetchingData() {
    try {
        let res = await fetch("https://dummyjson.com/quotes");
        let data = await res.json();
        console.log(data.quotes);
        let output = '';
        data.quotes.map((v)=>{
            output+=`
            <h2>${v.quote}</h2>
            `
        });
        document.getElementById("root").innerHTML=output;
    } catch (error) {
        console.log(error);
    }
}
fetchingData();