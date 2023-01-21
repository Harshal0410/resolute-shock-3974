let loginData = JSON.parse(localStorage.getItem("userData"));
let myName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
let toast = document.getElementById("pop");
console.log(loginData);

btn.addEventListener("click",()=>{
    if(check()){
        toast.style.display = "block";
        window.open("./index.html","_self");
    }else{
        alert("Invalid email id or password");
    }
    if(loginData.length === 0){
        alert("You dont have an account. SignUp")
    }
});

function check(){
    for(let i = 0;i<loginData.length;i++){
        if(loginData[i].email === email.value && loginData[i].password === password.value){
            loginData[i].status = "true";
            localStorage.setItem("userData",JSON.stringify(loginData))
            return true
        }
    }
    return false
}