// console.log("First............");

// let p1 = new Promise((res,rej)=>{
//     res("I am resolved")
    // rej("I am rejected")
// })

// console.log(p1);

// p1.then(()=>{
//     console.log("Then Block");
// }).catch(()=>{
//     console.log("Catch Block");
// }).finally(()=>{
//     console.log("Finally Block");
// })

// console.log("Last............");

// setTimeout(() => {
//     console.log("Happy Birthday");
// }, 3000);

// setInterval(() => {
//     console.log("Sunday");
// }, 2000);

// console.log("Last");

//!--------------------Static Methods is JS---------------
// let p1 = new Promise((res,rej) => {
//     setTimeout(() => {
//         res("I am p1");
//     }, 3000);
// })

// let p2 = new Promise((res,rej) => {
//     setTimeout(() => {
//         rej("I am p2");
//     }, 4000);
// })

// let p3 = new Promise((res,rej) => {
//     setTimeout(() => {
//         rej("I am p3");
//     }, 2000);
// })

// let p4 = new Promise((res,rej) => {
//     setTimeout(() => {
//         res("I am p4");
//     }, 5000);
// })

//!------------------all() method-------------------
// Promise.all([p1,p2,p3,p4])
//     .then((v)=>{
//         console.log(v);
//         console.log("Then Block");
//     })
//     .catch(()=>{
//         console.log("Catch Block");
//     })
//     .finally(()=>{
//         console.log("Finally Block");
//     });
    
//!------------------allSetteled() method-----------
// Promise.allSettled([p1,p2,p3,p4])
//     .then((v)=>{
//         console.log(v);
//         console.log("Then Block");
//     })
//     .catch(()=>{
//         console.log("Catch Block");
//     })
//     .finally(()=>{
//         console.log("Finally Block");
//     });

//!------------------any() method-------------------
// Promise.any([p1,p2,p3,p4])
//     .then((v)=>{
//         console.log(v);
//         console.log("Then Block");
//     })
//     .catch(()=>{
//         console.log("Catch Block");
//     })
//     .finally(()=>{
//         console.log("Finally Block");
//     });

//!------------------race() method------------------
// Promise.race([p1,p2,p3,p4])
//     .then((v)=>{
//         console.log(v);
//         console.log("Then Block");
//     })
//     .catch(()=>{
//         console.log("Catch Block");
//     })
//     .finally(()=>{
//         console.log("Finally Block");
//     });

//!------------------promise chaining------------------
let p1 = new Promise((res,rej)=>{
    res("I am p1");
})
    .then((v)=>{
        console.log(v);
        console.log("I am then for p1");

        return new Promise((res,rej)=>{
            rej("I am promise in chaining")
        })
            .then((v)=>{
                console.log(v);
                console.log("then in chaining");
            })
            .catch(()=>{
                console.log("catch in chaining");
            }) 
    })
    .catch(()=>{
        console.log("I am catch for p1");
    })
    .finally(()=>{
        console.log("I am finally for p1");
    })