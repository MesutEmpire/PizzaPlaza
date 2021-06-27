const products = [
  {
    image: "images/pizza_bacon-cheddar-ham.jpg",
    duration: "100-110 min",
    name: "Pizza Bacon Cheddar Ham",
    price: "Min Ksh 570",
  },
  {
    image: "images/pizza_bacon-cheeseburger.jpg",
    duration: "60-70min",
    name: "Pizza Bacon Cheese Burger",
    price: "Min Ksh 620",
  },
  {
    image: "images/pizza_buffalo_chicken.jpg",
    duration: "90-100min",
    name: "PPizza Buffalo Chicken",
    price: "Min Ksh 500",
  },
  {
    image: "images/pizza_chicken_fajita.jpg",
    duration: "80-100min",
    name: "PPizza Chicken Fajita",
    price: "Min Ksh 490",
  },
];

let items = "";

for (let i = 0; i < products.length; i++) {
  items +=
    '<div class="col" data-toggle="modal"  data-target="#myModal"><div class="card h-50"><div class="pizza-images"><img src=' +
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
