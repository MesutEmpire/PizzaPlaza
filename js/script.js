const products = [
  {
    image: "images/BBQ_steak.png",
    duration: "100-110 min",
    name: "BBQ Steak",
    price: "Min Ksh 570",
  },
  {
    image: "images/Chicken_bali.png",
    duration: "60-70min",
    name: "Chicken Bali",
    price: "Min Ksh 620",
  },
  {
    image: "images/Chicken_supreme.png",
    duration: "90-100min",
    name: "Chicken Supreme",
    price: "Min Ksh 500",
  },
  {
    image: "images/Chicken_Tikka.png",
    duration: "80-100min",
    name: "Chicken Tikka",
    price: "Min Ksh 490",
  },
  {
    image: "images/Hawaiian.png",
    duration: "90-100min",
    name: "Hawaiian",
    price: "Min Ksh 500",
  },
  {
    image: "images/Pepperoni_chicken.png",
    duration: "80-100min",
    name: "Pepperoni Passion",
    price: "Min Ksh 490",
  },
  {
    image: "images/Periperi_chicken.png",
    duration: "80-100min",
    name: "Peri peri Chicken",
    price: "Min Ksh 490",
  },
  {
    image: "images/Veggie_extravaganza.png",
    duration: "80-100min",
    name: "Veggie Extravaganza",
    price: "Min Ksh 490",
  },
];

let items = "";

for (let i = 0; i < products.length; i++) {
  items +=
    '<div class="col col-md-3" data-toggle="modal"  data-target="#myModal"><div class="card mb-5"><div class="pizza-images"><img src=' +
    products[i].image +
    ' class="card-img-top" alt="..."/> <div class="bottom-right-text">' +
    products[i].duration +
    '</div></div><div class="card-body"><h5 class="card-title">' +
    products[i].name +
    '</h5></div><div class="card-footer"><small class="text-muted">' +
    products[i].price +
    "</small></div></div></div>";
}

document.getElementById("prod").innerHTML = items;

$("#delivery").click(function () {
  $(".destination").show();
});
$("#pickUp").click(function () {
  $(".destination").hide();
});
