// let str = "ShIVaM";
// let a = str.length;
// console.log(a);
// console.log(str.length);        //!--------1

// console.log(str.toLowerCase()); //!--------2
// console.log(str.toUpperCase()); //!--------3

// console.log(str.at(5));         //!--------4
// console.log(str.at(-2));

// console.log(str.charAt(4));     //!--------5
// console.log(str.charAt(-2));

// let str1 = "javascript"
// console.log(str1.repeat(5));    //!--------6

// console.log(str1.includes("ja"));//!-------7
// console.log(str1.startsWith("java"));//!---8
// console.log(str1.endsWith("script"));//!---9

// let str2 = "hellololololo"
// console.log(str2.replace("lo","p"));//!----10
// console.log(str2.replaceAll("lo","p"));//!-11

// let str3 = "     Java Script     "
// console.log("Most stable version of "+str3.trimStart()+"is ES-6");  //!------12
// console.log("Most stable version of "+str3.trimEnd()+"is ES-6");    //!------13
// console.log("Most stable version of "+str3.trim()+"is ES-6");       //!------14

// let strA = "ja"
// let strB = "va"
// let strC = "script"
// console.log(strA.concat(strB,strC));                                //!------15

// let strD = "java"
// let strE = "script"
// console.log(strD.padStart(16,strE));                                //!------16
// console.log(strD.padEnd(16,strE));                                  //!------17

let str = "javascript"
console.log(str.indexOf("a"));                                         //!------18
console.log(str.indexOf("a",2));  

console.log(str.lastIndexOf("a"));                                     //!------19
console.log(str.lastIndexOf("a",2));

console.log(str.slice(2,8));                                           //!------20
console.log(str.slice(2,-2));

console.log(str.charCodeAt(1));                                        //!------21

console.log(str.substring(2,8));                                       //!------22
console.log(str.substring(3,-4));

console.log(str.substr(2,5));                                          //!------23

console.log(str.split(""));                                            //!------24
