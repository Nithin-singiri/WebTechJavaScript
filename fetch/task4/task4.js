async function quotesWeb() {
    try {
        let result = await fetch("https://dummyjson.com/quotes");
        console.log(typeof(result));
        let data = await result.json();
        console.log(typeof(data));
        console.log(data.quotes);
        let output = '';
        data.quotes.map((v)=>{
            output+=`
                <h3>Quote : ${id}</h3>
            `
        });
        document.getElementById("root").innerHTML=output;
    } catch (error) {
        console.log(error);
    }
}
quotesWeb();