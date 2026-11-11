let i=1;
function info() {
    while(i<=10){
        console.log("info - ",i);
        i++;
        info();
    }
}
info();

