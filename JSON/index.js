//!-----------------JSON-----------------
// let emp = {
//     name:"Nithin",
//     age:23
// }
// console.log(emp);

// let empJson = JSON.stringify(emp)     //!-------1
// console.log(empJson);

// let empObj = JSON.parse(empJson)      //!-------2
// console.log(empObj);

//!------------Destructuring----------------
let emp = {
    name:"Anish",
    skill:{
        html:1,
        css:2,
        js:3
    }
}

let {name,skill} = emp
console.log(name);
console.log(skill);

const {html,css,js} = skill
console.log(html);
console.log(css);
console.log(js);
