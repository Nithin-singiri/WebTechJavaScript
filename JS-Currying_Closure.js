function bank(a) {
    console.log("Executed first");
    let svaings = a;
    function fd(b) {
        console.log("Executed Second");
        let fd_bal = b;
        function total(c) {
            console.log("Executed Third");
            let tot_bal = svaings + fd_bal + c;
            console.log(tot_bal);
        }
        return total;
    }
    return fd;
}
bank(30000)(20000)(5000)