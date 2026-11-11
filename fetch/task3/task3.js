async function quotesWeb() {
    try {
        let result = await fetch("https://dummyjson.com/quotes");
        let data = await result.json();
        console.log(data.quotes);
        let output = '';
        data.quotes.map((v)=>{
            output+=`
                <div id="cards">
                    <h3>Quote ${v.id}</h3>
                    <p>${v.quote}</p>
                    <h4>Author : ${v.author}</h4>
                </div>
            `
        });
        document.getElementById("root").innerHTML=output;
    } catch (error) {
        console.log(error);
    }
}
quotesWeb();