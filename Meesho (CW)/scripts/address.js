let save = document.querySelector("form");
let home = document.getElementById("home");
home.addEventListener("click",()=>{
    window.open("./index.html","_self");
})

let myAddress = [];
let myName = document.getElementById("name");
let phoneNumber = document.getElementById("phone");
let houseNo = document.getElementById("houseNo");
let street = document.getElementById("colony");
let pincode = document.getElementById("pincode");
let city = document.getElementById("city");
let state = document.getElementById("state");


save.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
        name:myName.value, phoneNumber:phoneNumber.value, houseNo:houseNo.value, street:street.value, pincode:pincode.value, city:city.value,state:state.value
    }
    if(myAddress.length<2){
        myAddress.push(obj);
        localStorage.setItem("address",JSON.stringify(myAddress));
    }
    

    if(myName.value === "" || street.value === "" || city.value === "" || state.value === ""){
        alert("fill all the details correctly")
    }else{
        if(pincode.value.length != 6){
            alert("please enter 6 digit pincode");
        }else{
            if(phoneNumber.value.length != 10){
                alert("Please enter 10 digit phone number");
            }else{
                window.open("./payment.html","_self");
            }
        }
        
    }

});
