let m=60;
switch(true){
    case(m>=80 && m<=100):
        console.log("A");
        break;
    case(m>=60 && m<80):
        console.log("B");
        break;
    case(m>=40 && m<60):
        console.log("C");
        break;
    case(m>=0 && m<40):
        console.log("Fail");
        break;   
    default:
        console.log("Invalid Input");
}