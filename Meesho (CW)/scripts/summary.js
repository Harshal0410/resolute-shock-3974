let lsData = JSON.parse(localStorage.getItem("lsData")) || [];
let address = JSON.parse(localStorage.getItem("address")) || [];
let container = document.querySelector(".container");
let card1 = document.querySelector(".card1");
let home = document.getElementById("home");
home.addEventListener("click",()=>{
    window.open("./index.html","_self");
})


function display(data) {
    container.innerHTML = "";
    data.forEach((element,index) => {
        let subCard = document.createElement("div");
        let subDiv1 = document.createElement("div");
        let subDiv2 = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("h4");
        let price = document.createElement("h3");
        let free = document.createElement("span");
        let size = document.createElement("p");
        let category = document.createElement("span");
        let end = document.createElement("div");


        image.setAttribute("src", element.image);
        end.setAttribute("class", "light")

        let hr = document.createElement("hr");
        let remove = document.createElement("button");
        remove.addEventListener("click",()=>{
            filtered = data.filter((el,i)=>{
                if(index === i){
                    return false;
                }else{
                    return true;
                }
            })
            display(filtered)
            localStorage.setItem("lsData",JSON.stringify(filtered))
            location.reload()
        })

        title.innerText = element.title;
        price.innerText = "₹ " + element.price;
        free.innerText = " Free Delivery";
        size.innerText = "Size:Free Size" + " ○Qty:1";
        category.innerText = "Category: " + element.category;
        end.append(category,free)

        subDiv1.append(image);
        subDiv2.append(title,size,price,remove,hr,end);
        subCard.append(subDiv1,subDiv2);
        card1.append(subCard);
        container.append(card1);
    });
}
display(lsData);

let total = document.querySelector(".total");
let t = document.querySelector(".t");

let val = 0;
for(let i = 0;i<lsData.length;i++){
    val += +lsData[i].price;
}
val = val.toFixed(2);
total.innerText = "₹ " + val;
t.innerText = "₹ " + val;

// continue button
let proceed = document.getElementById("continue");
proceed.addEventListener("click",()=>{
    window.open("./address.html","_self")
})

function displayAddress(data) {
    container.innerHTML = "";
    data.forEach((element) => {
        let name = createElement("h3");
        let address = document.createElement("span");
        let phoneNumber = document.createElement("p");

        
        name.innerText = element.name;
        address.innerText = element.houseNo + element.street + element.city +  element.state + " - " + element.pincode;
        phoneNumber.innerText = "+91 " + element.phoneNumber;
        container.append(name,address,phoneNumber);
        // container.append(card1);
    });
}
// displayAddress(address);
let myAddress = document.getElementById("address");
let myName = document.createElement("h3");
let add = document.createElement("span");
let phoneNumber = document.createElement("p");

myName.innerText = address[0].name;
add.innerText = address[0].houseNo + ", " + address[0].street + ", " + address[0].city + ", " +  address[0].state + " - " +address[0].pincode;
phoneNumber.innerText = "+91 " + address[0].phoneNumber;

myAddress.append(myName,add,phoneNumber)
