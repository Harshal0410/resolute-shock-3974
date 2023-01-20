let lsData = JSON.parse(localStorage.getItem("lsData")) || [];



let total = document.querySelector(".total");
let t = document.querySelector(".t");

let val = 0;
for(let i = 0;i<lsData.length;i++){
    val += +lsData[i].price;
}

val = val.toFixed(2);
total.innerText = "₹ " + val;
t.innerText = "₹ " + val;

let proceed = document.getElementById("continue");
proceed.addEventListener("click",()=>{
    window.open("./summary.html","_self");
})