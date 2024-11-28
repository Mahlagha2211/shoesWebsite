let Products=[
    {id:1,Path:"../images/shoes1.png",price:"$100.99",color1:"#ce6402",color2:"#fdb60f"},
    {id:2,Path:"../images/shoes2.png",price:"$200.99",color1:"#707070",color2:"#DDDDE0"},
    {id:3,Path:"../images/shoes3.png",price:"$175.99",color1:"#584199",color2:"#c2c3f4"},
    {id:4,Path:"../images/shoes4.png",price:"$120.99",color1:"#d2dadc",color2:"#72c2dc"},
    {id:5,Path:"../images/shoes5.png",price:"$150.99",color1:"#dde1e3",color2:"#666D72"},
    {id:6,Path:"../images/shoes6.png",price:"$220.99",color1:"#eeb18b",color2:"#e2775a"},
    {id:7,Path:"../images/shoes7.png",price:"$110.99",color1:"#c0c0bc",color2:"#444444"},
    {id:8,Path:"../images/shoes8.png",price:"$150.99",color1:"#45708d",color2:"#73d8f0"},
]
let sizes=document.getElementsByClassName("sizes")
let colors=document.getElementsByClassName("colors")
let circleQuarter=document.querySelector(".circleQuarter")
let price=document.querySelector(".price")
let img=document.querySelector("img")
let url=new URLSearchParams(location.search)
let findId

function changeColor(event){
    Array.from(event.target.parentElement.children).forEach(function(anySize){
        anySize.style.color=document.documentElement.style.getPropertyValue("--color")
        anySize.style.borderColor=document.documentElement.style.getPropertyValue("--color")
    })
    event.target.style.color="black"
    event.target.style.borderColor="black"
}
Array.from(sizes).forEach(function(any){
    any.addEventListener("click",changeColor)
})
Array.from(colors).forEach(function(any){
    any.addEventListener("click",changeColor)
})

function changeShoes(){
    findId=Products.find(function(any){
        return any.id==url.get("id")
    })
    img.src=findId.Path
    price.innerHTML=findId.price
    circleQuarter.style.backgroundImage= 'linear-gradient(to top right,'+findId.color1+' 50%,'+findId.color2+')'
 
}

window.addEventListener("load",changeShoes)