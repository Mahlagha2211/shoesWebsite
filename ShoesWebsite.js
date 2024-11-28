let productElem=document.querySelector(".product")
let imgPrd=document.querySelector(".bigimg")
let picturs=document.getElementsByClassName("exchangePic")
let Customers=document.querySelector(".customers")
let Products=[
    {id:1,Path:"images/shoes1.png",price:"$100.99"},
    {id:2,Path:"images/shoes2.png",price:"$200.99"},
    {id:3,Path:"images/shoes3.png",price:"$175.99"},
    {id:4,Path:"images/shoes4.png",price:"$120.99"},
    {id:5,Path:"images/shoes5.png",price:"$150.99"},
    {id:6,Path:"images/shoes6.png",price:"$220.99"},
    {id:7,Path:"images/shoes7.png",price:"$110.99"},
    {id:8,Path:"images/shoes8.png",price:"$150.99"},
]
let customers=[
    {id:1,Path:"images/girl_dp1.jpg",name:"Ranidi Lochara"},
    {id:2,Path:"images/man_dp1.jpg",name:"Sayuru Tharanga"},
    {id:3,Path:"images/man_dp2.jpg",name:"Senuda Dilwan"},
    {id:4,Path:"images/gir_dp2.jpg",name:"Kaveesha vidurangi"},
    {id:5,Path:"images/gir_dp3.jpg",name:"John Deo"},
    {id:6,Path:"images/man_dp3.jpg",name:"Charith Aruna"}
]

function moveRight(event){ 
    event.target.firstChild.style.animation="animIcon forwards 0.5s"
}
function moveLeft(event){
    event.target.firstChild.style.animation="animIcon1 0.5s"
}
Products.forEach(function(Product){
    productElem.insertAdjacentHTML('beforeend','<div class="products"  onmouseenter="moveRight(event)" onmouseleave="moveLeft(event)"><div class="doubleIcon"><i class="fa-solid fa-heart heart"></i><i class="fa-solid fa-share arrow"></i></div><img src="'+Product.Path+'" alt=""><h2>NIKE</h2><p class="explainProduct">Lorem ipsum dolor sim adipisicing elit.dolorum velit.</p><p class="price">'+Product.price+'</p><div class="star"><i class="fa-solid fa-star Star"></i><i class="fa-solid fa-star Star"></i><i class="fa-solid fa-star Star"></i><i class="fa-solid fa-star Star"></i><i class="fa-solid fa-star Star"></i></div><a href="pageOfShoes/pageOfShoes.html?id='+ Product.id +'">Add To Cart</a></div>')
})
customers.forEach(function(customer){
    Customers.insertAdjacentHTML('beforeend','<div class="customer"><div class="top"><img src="'+customer.Path+'" alt=""><div class="rightcustomer"><p>'+customer.name+'</p><div class="star"><i class="fa-solid fa-star Star"></i><i class="fa-solid fa-star Star"></i><i class="fa-solid fa-star Star"></i><i class="fa-solid fa-star Star"></i><i class="fa-solid fa-star Star"></i></div></div></div><div class="bottom">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt ab perspiciatis illum blanditiis quasi odit repudiandae qui eveniet nam. Sequi animi architecto laborum, facere minima quis possimus corrupti laboriosam molestias.</div></div>')

})
Array.from(picturs).forEach(function(pic){
    pic.addEventListener("click",function(event){
        imgPrd.src=event.target.src
    })

})