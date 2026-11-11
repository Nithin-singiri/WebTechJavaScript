// alert("Welcome to our page !!")
// console.log("Alert Pop-up");

// let a=confirm("Are you sure you want to delete this ??")
// let a=window.confirm("Are you sure you want to delete this ??")
// console.log(a);

// let a=Number(prompt("Enter a number : "));
// let b=Number(prompt("Enter 2nd number : "));
// console.log(a+b)

// let num=Number(prompt("Enter the table number : "));
// let multiples=Number(prompt("Enter the number of multiples : "));
// for(let i=1; i<=multiples; i++){
//     console.log(num + '*' + i + "=" + i*num)
// }

// let num=Number(prompt("Enter the number for factorial : "));
// let fact=1;
// for(let i=num; i>=1; i--){
//     fact*=i;
// }console.log("Factorial of "+num+"="+fact);

let num=Number(prompt("Enter the number to check for Armstrong : "));
let temp=num;
let sum=0;
while(temp>0){
    let rem=temp%10;
    sum+=rem*rem*rem;
    temp=parseInt(temp/10);
}
if(sum==num){
    console.log("It is Armstrong number.");
}
else{
    console.log("It is not a armstrong number.");
}