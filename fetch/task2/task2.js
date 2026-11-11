fetch("https://dummyjson.com/products").then((response)=>{
    return response.json();
}).then((val)=>{
    let output = '';
    val.products.map((v)=>{
        console.log(v);
        output+=`
        <main>
            <div id="image"><img src="${v.thumbnail}"/></div>
            <div id="description">
                <h3>Product : ${v.title}</h3>
                <h4>Brand   : ${v.brand}</h4>
                <h4>Description  : </h4>
                <p>${v.description}</p>
                <h4>Price            : ${v.price}</h4>
                <h4>Available stock  : ${v.stock}</h4>
                <h4>Warranty         : ${v.warrantyInformation}</h4>
                <h4>Delivary         : ${v.shippingInformation}</h4>
                <h4>Rating           : ${v.rating}</h4>
                <h4>Return policy    : ${v.returnPolicy}</h4>
                <div id="qnty">
                    <button id="plus">+</button>
                    <div id="value"></div>
                    <button id="minus">-</button>
                </div>
                <button id="buy">Buy Now</button>
            </div>

        </main>
        `
        // let plus = document.getElementById("plus")
        // let minus = document.getElementById("minus")
        // let value = 0;
        // plus.addEventListener("click",()=>{
        //     if(value>=0){
        //         value+= 1;
        //         document.getElementById("value").innerText=value;
        //     } 
        // });
        // minus.addEventListener("click",()=>{
        //     if(value<0){
        //         value-= 1;
        //         document.getElementById("value").innerText=value;
        //     } 
        // });
    });
    document.getElementById("content").innerHTML=output;
});
