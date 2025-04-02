let productElem = document.querySelector(".product");
let imgPrd = document.querySelector(".bigimg");
let picturs = document.getElementsByClassName("exchangePic");
let Customers = document.querySelector(".customers");
let Openmenu = document.querySelector(".openmenu");
let menu = document.querySelector(".menu");
let Closemenu = document.querySelector(".closeMenu");
let menuitem = document.querySelectorAll(".menuitem");
let Products = [
  { id: 1, Path: "./src/images/shoes1.png", price: "$100.99" },
  { id: 2, Path: "./src/images/shoes2.png", price: "$200.99" },
  { id: 3, Path: "./src/images/shoes3.png", price: "$175.99" },
  { id: 4, Path: "./src/images/shoes4.png", price: "$120.99" },
  { id: 5, Path: "./src/images/shoes5.png", price: "$150.99" },
  { id: 6, Path: "./src/images/shoes6.png", price: "$220.99" },
  { id: 7, Path: "./src/images/shoes7.png", price: "$110.99" },
  { id: 8, Path: "./src/images/shoes8.png", price: "$150.99" },
];
let customers = [
  { id: 1, Path: "./src/images/girl_dp1.jpg", name: "Ranidi Lochara" },
  { id: 2, Path: "./src/images/man_dp1.jpg", name: "Sayuru Tharanga" },
  { id: 3, Path: "./src/images/man_dp2.jpg", name: "Senuda Dilwan" },
  { id: 4, Path: "./src/images/gir_dp2.jpg", name: "Kaveesha vidurangi" },
  { id: 5, Path: "./src/images/gir_dp3.jpg", name: "John Deo" },
  { id: 6, Path: "./src/images/man_dp3.jpg", name: "Charith Aruna" },
];

Products.forEach(function (Product) {
  productElem.insertAdjacentHTML(
    "beforeend",
    '<div class=" flex flex-col justify-center items-center space-y-2  shadow-[0_0_7px_1px_#8e17bd] p-4 group relative  "><div class="flex flex-col absolute group-hover:animate-moveRight opacity-0 "><i class="fa-solid fa-heart border border-black p-2 m-2"></i><i class="fa-solid fa-share border border-black p-2 m-2 "></i></div><img class="h-36 transition-transform duration-300 group-hover:scale-105 mb-5" src="' +
      Product.Path +
      '" alt=""><h2>NIKE</h2><p class="text-center text-[#686868]">Lorem ipsum dolor sim adipisicing elit.dolorum velit.</p><p class="font-bold">' +
      Product.price +
      '</p><div class=""><i class="fa-solid fa-star text-amber-400 "></i><i class="fa-solid fa-star text-amber-400"></i><i class="fa-solid fa-star text-amber-400"></i><i class="fa-solid fa-star text-amber-400"></i><i class="fa-solid fa-star text-amber-400"></i></div><a class="bg-linear-to-r from-[#e62ee9] via-[#a41aa7] to-[#8e17bd] rounded-md px-4 py-2 text-white transition-colors duration-500 hover:from-[#8e17bd] hover:to-[#e62ee9] hover:scale-105" href="src/pageOfShoes/pagesOfShoes.html?id=' +
      Product.id +
      '" >Add To Cart</a></div>'
  );
});
customers.forEach(function (customer) {
  Customers.insertAdjacentHTML(
    "beforeend",
    '<div class="border border-gray-400 space-y-3 shadow-md p-6 rounded-lg"><div class="flex items-center space-x-4"><img class="w-[60px] h-[50px] rounded-full shadow-[0_0_2px_1px_rgb(141, 141, 141)] transition-transform duration-300 cursor-pointer hover:scale-105" src="' +
      customer.Path +
      '" alt=""><div class=""><p>' +
      customer.name +
      '</p><div ><i class="fa-solid fa-star text-amber-400"></i><i class="fa-solid fa-star text-amber-400"></i><i class="fa-solid fa-star text-amber-400"></i><i class="fa-solid fa-star text-amber-400"></i><i class="fa-solid fa-star text-amber-400"></i></div></div></div><div class="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt ab perspiciatis illum blanditiis quasi odit repudiandae qui eveniet nam. Sequi animi architecto laborum, facere minima quis possimus corrupti laboriosam molestias.</div></div>'
  );
});
Array.from(picturs).forEach(function (pic) {
  pic.addEventListener("click", function (event) {
    imgPrd.src = event.target.src;
  });
});
Openmenu.addEventListener("click", function (event) {
  menu.classList.toggle("translate-x-70");
  menu.classList.toggle("translate-x-0");
});
Closemenu.addEventListener("click", function (event) {
  menu.classList.toggle("translate-x-70");
  menu.classList.toggle("translate-x-0");
});

menuitem.forEach((item) => {
  item.addEventListener("click", function (event) {
    menu.classList.toggle("translate-x-70");
    menu.classList.toggle("translate-x-0");
  });
});

