let container = document.querySelector(".products"); const api = "https://fakestoreapi.com/products";
let searchbtn = document.querySelector(".navbar form");
let myData = [];
let cartdata = JSON.parse(localStorage.getItem("lsData")) || [];

async function fetchProduct() {
    let req = await fetch(api);
    let data = await req.json();
    console.log(data);
    // console.log(data[1].title)
    display(data);
    myData = data;
    // console.log(myData)
    searchbtn.addEventListener("submit", (e) => {
        e.preventDefault();
        searchData(data);
    })
}
fetchProduct();

function display(data) {
    container.innerHTML = "";
    data.forEach((element,index) => {
        let card = document.createElement("div");

        let image = document.createElement("img");
        let title = document.createElement("p");
        let details = document.createElement("p");
        let price = document.createElement("h3");
        let free = document.createElement("p");
        let ratingCard = document.createElement("div");
        let ratings = document.createElement("span");
        let reviews = document.createElement("span");
        let star = document.createElement("img");
        let add_to_cart = document.createElement("button");
        image.setAttribute("src", element.image);

        title.innerText = "Product"+ element.title + element.id;
        price.innerText = "₹ " + element.price;
        details.innerText = element.description;
        ratings.innerText = element.rating.rate + " ✰";
        reviews.innerText = element.rating.count + " reviews";
        add_to_cart.innerText = "Add to Cart";

        add_to_cart.addEventListener("click",()=>{
            myData.forEach((el,i)=>{
                if(index === i){
                    cartdata.push(el);
                }
            })
            localStorage.setItem("lsData",JSON.stringify(cartdata));
        });


        free.innerText = "Free Delivery";
        ratings.setAttribute("id", "rating");

        ratingCard.append(ratings, reviews);
        card.append(image, title, price, free, ratingCard, add_to_cart);
        container.append(card);
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
function mySort(data){

}