function signIn(){
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    console.log("click");
    if (userName=="admin" && password==1234) {
        console.log("correct");
        window.location.assign("cashier.html");
    }else{
        console.log("error");
    }
    
}