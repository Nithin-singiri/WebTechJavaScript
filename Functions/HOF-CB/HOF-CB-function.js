// function a(b, c, d) {
//     let e = b + c;
//     return d(e);
// }

// function x(z) {
//     console.log(z);
// }

// a(5,8,x)

function parameter(p) {
    return 4*p;
}

function area(a) {
    return a*a;
}

function square(a,b) {
    return b(a);
}

console.log(square(5,parameter));
console.log(square(4,area));

