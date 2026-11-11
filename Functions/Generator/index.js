let i = 100;
function * product() {
    while(i<10000){
        yield i++;
    }
}

let pid = product();
for(let j = 100; j<=10000; j++){
    console.log(pid.next().value);
}
