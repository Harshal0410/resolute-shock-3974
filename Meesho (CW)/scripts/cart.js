let lsData = JSON.parse(localStorage.getItem("lsData")) || [];
let container = document.querySelector(".container");
let card1 = document.querySelector(".card1");
let to = document.querySelector("#top");
let emptyCart = document.querySelector("#empty-cart");
let viewProducts = document.querySelector("#empty-cart > button");

console.log(lsData);
let card2 = document.querySelector(".card2");
let home = document.getElementById("home");
home.addEventListener("click",()=>{
    window.open("./index.html","_self");
})
if(lsData.length === 0){
    container.style.display = "none";
    card2.style.display = "none";
    to.style.display = "none";
    emptyCart.style.display = "block";

}
viewProducts.addEventListener("click",()=>{
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
        remove.innerText = "× REMOVE";
        category.innerText = "Category: " + element.category;
        end.append(category,free)

        subDiv1.append(image);
        subDiv2.append(title,size,price,remove,hr,end);
        subCard.append(subDiv1,subDiv2);
        card1.append(subCard);
        container.append(card1);
    });
}
localStorage.setItem("lsData",JSON.stringify(lsData));
display(lsData)
let items = document.getElementById("items");
items.innerText = lsData.length + " Item"

let total = document.querySelector(".total");
let t = document.querySelector(".t");

let val = 0;
for(let i = 0;i<lsData.length;i++){
    val += +lsData[i].price;
}

total.innerText = "₹ " + val;
t.innerText = "₹ " + val;

// continue button
let proceed = document.getElementById("continue");
proceed.addEventListener("click",()=>{
    window.open("./address.html","_self")
})