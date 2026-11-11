//!------------Default Import--------------
// import a from "./index1.js"
// console.log(a);
// a(10,20)

//!------------Named Import----------------
// import { demo2,info,num } from "./index1.js";
// import { demo2,info,data } from "./index1.js";
// import { info } from "./index1.js";
// import { num } from "./index1.js";
// demo2(10,30)
// info(100)
// console.log(data+100);

//!------Importing all functions in one time---------
import * as a from "./index1.js";
console.log(a);
a.default(2,5)
console.log(a.data);
a.demo2(50,20);
a.info(30)
