// //!-----------Creating an array---------------
// //!-----------using literal way---------------
// let arr = ["html","SQL","MongoDB"];
// console.log(arr);
// console.log(arr[1]); //!--------Reading/Display
// arr[3] = "React"     //!--------Creating new elements/push
// console.log(arr);
// arr[2] = "NoSQL"     //!--------Updating
// console.log(arr);
// delete arr[1];       //!--------Deleting an element/pop
// console.log(arr);
// console.log(arr[1]);

// //!------------Using array constructor------------
// let newArr = new Array();
// console.log(newArr);
// newArr[0]="HTML"
// newArr[1]="CSS"
// console.log(newArr);

// //!------------Using Array.of()------------------
// let arr2 = Array.of(1,2,3,4,5,6,"SQL")
// console.log(arr2);
// arr2[7] = "HTML"
// console.log(arr2);


// let arr=["html","css","java","python","node.js"];
// console.log(arr.length);                             //!------1
// arr.push("js","react");                              //!------2
// console.log(arr);
// arr.pop();                                           //!------3
// console.log(arr);
// arr.shift();                                         //!------4
// console.log(arr);
// arr.unshift("sql","aws")                             //!------5
// console.log(arr);
// arr.splice(2,1);                                     //!------6-will mutate the array
// arr.splice(2,1,"react","mongodb");
// console.log(arr);
// let arr1=arr.slice(1,4);                             //!------7-will not mutate the array

// let arr=[100,150,200,250,300]
// arr.map((val,ind)=>{                                 //!------8
//     console.log(val+50,ind);
// })

// let arr1=arr.map((val)=>{
//     return val+50;
// })
// console.log(arr1);

// let arr1=["html","css","js","react"];
// arr1.map(function i(v){
//     console.log(v);

// let food=[
//     "Paneer biryani","MUSHROOM BIRYANI","chinese soup","paneer chilli",
//     "baby corn","spring roll","pani puri","samosa","momos"];
// let filteredFood=food.filter((v)=>{                           //!------9
//     return v.toLowerCase().includes("ani");
// })
// console.log(filteredFood);

// let food=[
//     "Paneer biryani","MUSHROOM BIRYANI","chinese soup","paneer chilli",
//     "baby corn","spring roll","pani puri","samosa","momos"];
// let filteredFood = food.find((v)=>{                           //!------10
//     return v.toLowerCase().includes('yani')
// })
// console.log(filteredFood);

// let arr = [10,34,54,32,11,2,98,56]
// let arr1 = arr.some((v)=>{                                 //!-------11
//     return v>97;
// })
// console.log(arr1);

// let arr2 = arr.every((v)=>{                                //!-------12
//     return v>2;
// })
// console.log(arr2);

// let a = [10,20,30,40];
// a.forEach((v)=>{                                           //!-------13
//     console.log(v+50);
// })

// let arr = [1,2,3,4,5,6];
// let init = 0
// let arr1 = arr.reduce((acc,cv)=>{                          //!-------14
//     return acc+cv
// },init)
// console.log(arr1);

// let a1 = ['HTML']
// let a2 = ['CSS']
// let a3 = ['js']
// let arr2 = a1.concat(a2,a3)                               //!--------15
// console.log(arr2);

// let ar = ['html',['css',['js',['react']]]]
// let ar1 = ar.flat(3)                                      //!--------16
// console.log(ar1);

// let arr1 = ['html','css','js','java','sql','js','mongodb'];
// console.log(arr1.indexOf("js",3));                        //!--------17
// console.log(arr1.lastIndexOf("js",3));                    //!--------18

// console.log(arr1.includes('js'));                         //!--------19

// arr1.fill('node',1,4)                                     //!--------20
// console.log(arr1);

// arr1.reverse()                                            //!--------21
// console.log(arr1);

// let arr = ['html','css','js'];
// console.log(arr.toString());                              //!--------22
// console.log(arr);

// let str = 'javascript'
// let ar = Array.from(str)                                  //!--------23
// console.log(str,ar);

// let arr1 = ['html','css','js']
// let arr2 = arr1.join('')                                  //!--------24
// let arr3 = arr1.join(' ')
// let arr4 = arr1.join('-')
// console.log(arr1 ,arr2 ,arr3 ,arr4 );
