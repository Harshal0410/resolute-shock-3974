let loginData = JSON.parse(localStorage.getItem("userData")) || [];
let myName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let toast = document.getElementById("pop");

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    if(myName.value === "" || email.value === "" || password.value === ""){
        alert("All the boxes should be filled")
    }else{
        toast.style.display = "block";
        window.open("./index.html","_self");
        let obj = {name:myName.value,email:email.value,password:password.value,status:"true"};
        loginData.push(obj);
        localStorage.setItem("userData",JSON.stringify(loginData));
    }
   
    
})