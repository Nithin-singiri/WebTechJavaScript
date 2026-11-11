// let [a,b,c,d] = arr
// console.log(arr);

//! De-structuring
// let lapi = {
//     brand: "dell",
//     price: 12000,
//     color: "white",
//     specification:{
//         processor:"intel",
//         RAM: "128GB"
//     }
// }

// console.log(lapi.brand);

// let {brand, price, color, specification} = lapi
// let {RAM, processor} = specification
// console.log(lapi);
// console.log(specification);

//!=============================================================================
//! Rest Parameter
function disp(n,m,...a) {
    console.log(` n values : ${n}`);
    console.log(` m values : ${m}`);
    console.log(` a values : ${a}`);
}

// disp(1,2,3,4,5,6,7,8,9,10)

//! Spread Operator
let a = [10,20,30]
let b = [...a,40,50,60]
console.log(b);

let lapi = {
    brand: "dell",
    price: 12000,
    color: "white",
    specification:{
        processor:"intel",
        RAM: "128GB"
    }
}

let lapDetails = {
    details:"Laptop Details",
    ...lapi
}

// console.log(lapDetails);

let str = `New Movie Name`
// console.log(...str);
