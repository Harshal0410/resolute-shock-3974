let container = document.querySelector(".products"); const api = "https://fakestoreapi.com/products";
let loginData = JSON.parse(localStorage.getItem("userData")) || [];

let searchbtn = document.querySelector(".navbar form");
let myData = [];
let cartdata = JSON.parse(localStorage.getItem("lsData")) || [];
let sortby = document.getElementById("sortby");
let home = document.getElementById("home");
let profile = document.getElementById("profile");
let profileName = document.getElementById("username");
let no1 = document.getElementById("no1");
let no2 = document.getElementById("no2");
let cart = document.getElementById("ca");
let toast = document.getElementById("toast");

function showToast(){
    toast.style.visibility = "visible";
    setTimeout(()=>{
        toast.style.visibility = "hidden";
    },1500)
}


no2.addEventListener("click",()=>{
    for(let i = 0;i<loginData.length;i++){
        loginData[i].status = "false";
        }
        window.open("./signIn.html","_self");
        localStorage.setItem("userData",JSON.stringify(loginData));
        no2.style.display = "block";
        window.close("./index.html");
    }
)
cart.addEventListener("click",()=>{
    if(loginData[0].status === "true"){
        window.open("./cart.html","_self");
    }
})
profileName.style.display = "none";
if(loginData.length === 0){
    no1.style.display = "block";
}
for(let i = 0;i<loginData.length;i++){
    if(loginData[i].status === "true"){
        profileName.innerText = loginData[i].name;
        no2.style.display = "block";
        profileName.style.display = "block"
    }else{
        no1.style.display = "block";
    }
}

home.addEventListener("click",()=>{
    window.open("./index.html","_self");
})

async function fetchProduct() {
    let req = await fetch(api);
    let data = await req.json();
    console.log(data);
    // console.log(data[1].title)
    display(data);
    myData = data;
    mySort(myData);
    // console.log(myData)
    searchbtn.addEventListener("submit", (e) => {
        e.preventDefault();
        searchData(data);
    })
}
fetchProduct();

function display(data) {
    container.innerHTML = "";
    data.forEach((element, index) => {
        let card = document.createElement("div");

        let image = document.createElement("img");
        let title = document.createElement("h4");
        let details = document.createElement("p");
        let price = document.createElement("h3");
        let free = document.createElement("p");
        let ratingCard = document.createElement("div");
        let ratings = document.createElement("span");
        let reviews = document.createElement("span");
        let add_to_cart = document.createElement("button");
        image.setAttribute("src", element.image);

        title.innerText = "Product" + element.title + element.id;
        price.innerText = "₹ " + element.price;
        details.innerText = element.description;
        ratings.innerText = element.rating.rate + " ✰";
        reviews.innerText = element.rating.count + " reviews";
        add_to_cart.innerText = "Add to Cart";

        add_to_cart.addEventListener("click", () => {
            myData.forEach((el, i) => {
                if (index === i) {
                    cartdata.push(el);
                }
            })
            // myFunction();
            localStorage.setItem("lsData", JSON.stringify(cartdata));
            showToast();
        });


        free.innerText = "Free Delivery";
        ratings.setAttribute("id", "rating");

        ratingCard.append(ratings, reviews);
        card.append(image, title, price, free, ratingCard, add_to_cart);
        container.append(card);
        setTimeout(()=>{
            toast.style.visibility = "hidden";
        },2000)
    });
}



let searchValue = document.getElementById("search");
// Search functionality
function searchData(data) {
    let filtred = data.filter((element, index) => {
        if (element.title.toLowerCase().includes(searchValue.value.toLowerCase())) {
            return true;
        }
        else {
            return false;
        }
    });
    document.querySelector(".center").style.display = "none";
    display(filtred)
}

// Sort functionality
function mySort(data) {
    sortby.addEventListener("click", () => {
        if (sortby.value === "high") {
            data.sort(function(a,b){return +b.price - +a.price});
            display(data);
        }
        else if (sortby.value === "low"){
            let my = data.sort(function(a,b){
                return +a.price - +b.price;
            });
            display(data);
            console.log(my)
        }
        else if (sortby.value === "relevance") {
            display(data);
        }
    })
}
