//!---------Default Export---------
export default function demo(a,b) {
    console.log(a+b);
}

//!---------Named Export-----------
// export function demo2(a,b) {
//     console.log(a*b);
// }

// export function info(a){
//     console.log(a+60);
// }

// export let num = 50;

function demo2(a,b) {
    console.log(a*b);
}
function info(a){
    console.log(a+60);
}
let num = 50;

export{
    demo2,info,num as data
}