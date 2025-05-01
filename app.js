//hamburger
let menu = document.querySelector(".hamburger");
let cart = document.querySelector(".cart");
let block = document.querySelector(".block");
let basket = document.querySelector(".basket-container")

function ham(){
    block.classList.toggle("active"); 
}
function trolley(){
    basket.classList.toggle("active1");
}
// slider
const slides = document.querySelector(".slides");
const slideimages = document.querySelectorAll(".slide");
const prevbtn = document.getElementById("prev");
const nextbtn = document.getElementById("next");
let index = 0;

function showSlide(index){
    slides.style.transform = `translateX(${-index * 100}%)`;
}
nextbtn.addEventListener("click",()=>{
    index = (index+1)% slideimages.length;
    showSlide(index);
})

prevbtn.addEventListener("click", ()=>{
    index = (index-1 + slideimages.length)% slideimages.length;
    showSlide(index);
})
//searchbox
document.addEventListener("DOMContentLoaded",function(){
    const container = document.querySelector(".container");
    const searchbox = document.querySelector("#search");

    searchbox.addEventListener("input",function(){
        const filter = this.value.toLowerCase();
        const divs = document.querySelectorAll(".item");
        
        divs.forEach(div =>{
            const item = div.getAttribute("item-name").toLowerCase();
            div.style.display = item.includes(filter) ? "block":"none";
        });
    });
});

//add to cart
let divs = document.querySelectorAll(".item");
let cartbox = document.querySelector(".basket");
let cartbutton= document.querySelectorAll(".add-to-cart");
let arr = [];
let delarr =[];
let total = document.querySelector(".total");

cartbutton.forEach((cart)=>{
    let data = cart.getAttribute("value");
    let price = cart.getAttribute("price");
    cart.addEventListener("click",()=>{
        let save = document.createElement("div");
        save.classList.add("save");
        cartbox.append(save);
        save.textContent= data;
        let img = document.createElement("img");
        img.src = `${data}.jpg`;
        img.classList.add("cartimage")
        save.append(img);  
        let a = document.createElement("button");
        a.classList.add("delete");
        a.textContent="x";
        a.addEventListener("click",()=>{
            cartbox.removeChild(save);
            delarr.push(numprice);
            total.innerText = "";
            arr.pop(numprice);
        })
        save.append(a);
        let numprice = Number(price);
         arr.push(numprice);
         let sum =0;
        for(let i of arr){
          sum = sum+i;
           
        }
         total.innerText = `total:${sum}`;
        
       
    })
    
})

