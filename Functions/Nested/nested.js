console.log("Execution started .............");

function bank(){
    console.log("bank");
    let saving=50000;
    function fd(){
        let fd_bal=30000;
        function total(){
            let total_bal=saving+fd_bal;
            console.log(total_bal);
        }
        total();
    }
    fd();
}
bank();

console.log("Execution ended ...............");