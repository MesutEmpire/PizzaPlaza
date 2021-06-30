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
    '<div class="col col-md-3 "><a href="#myModal" data-toggle="modal" data-id="' +
    products[i].name +
    '" data-price="' +
    products[i].price +
    '" data-id="img-product"><div class="card mb-5"><div class="pizza-images"><img src=' +
    products[i].image +
    ' class="card-img-top" alt="..."/> <div class="bottom-right-text">' +
    products[i].duration +
    '</div></div><div class="card-body"><h5 class="card-title">' +
    products[i].name +
    '</h5></div><div class="card-footer"><small class="text-muted">' +
    products[i].price +
    "</small></a></div></div></div>";
}

document.getElementById("prod").innerHTML = items;

// $("#delivery").click(function () {
//   $(".destination").show();
// });
// $("#pickUp").click(function () {
//   $(".destination").hide();
// });
// document.getElementById("modal-title").innerHTML =
// "<p> BBQ Steak Sam</p>";

// $('#changeRadio').click(function(){
//   $("input:radio[id='blue']").prop("checked",true);
// });

// $('#colors input').change(function(){
//  var selected_item = $(this).val()
//  $('#output').html(selected_item);
// });

class PizzaPlaza {
  constructor(type, size, crust, toppings, quantity) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.quantity = quantity;
  }

  priceBySize() {
    console.log("size Selected ->", this.size);
    if (this.size == "large") {
      return 1155;
    } else if (this.size == "medium") {
      return 915;
    } else {
      return 610;
    }
  }

  crustPrice() {
    console.log("Crust Selected ->", this.crust);
    if (this.crust == "crispy") {
      return 350;
    } else if (this.crust == "stuffed") {
      return 150;
    } else if (this.crust == "gluten-free") {
      return 250;
    } else {
      return 0;
    }
  }

  toppingsPrice() {
    var toppingPrice = 0;
    if (this.toppings.length > 0) toppingPrice = this.toppings.length * 100;
    return toppingPrice;
  }

  deliveryPrice() {
    if (this.delivery == true) {
      return 150;
    } else {
      return 0;
    }
  }

  totalPricePickUp() {
    let pizzaSizePrice = this.priceBySize();
    let pizzaToppingsPrice = this.toppingsPrice();
    let pizzaCrustPrice = this.crustPrice();

    return pizzaSizePrice + pizzaToppingsPrice + pizzaCrustPrice;
  }

  pricePerQuantity() {
    let grossPrice = this.totalPricePickUp();
    return grossPrice * this.quantity;
  }

  totalPlusDelivery() {
    let withoutDelivery = this.pricePerQuantity();
    let deliveryFee = this.deliveryPrice();

    return withoutDelivery + deliveryFee;
  }
}

$("#myModal").on("show.bs.modal", function (e) {
  var productName = $(e.relatedTarget).data("id");
  var itemPrice = $(e.relatedTarget).data("price");
  document.getElementById("modalTitle").innerHTML = productName;
  $(e.currentTarget).find('input[name="productName"]').val(productName);
});

$("#btn_AddToOrder").click(function (e) {
  var productName = document.getElementById("productName").value.toLowerCase();
  var quantity = document.getElementById("quantity").value;
  var selectedPizzaSize = $('input[name="pizzaSize"]:checked')
    .val()
    .toLowerCase();
  var selectedPizzaSCrust = $('input[name="pizzaCrust"]:checked')
    .val()
    .toLowerCase();
  //selectedToppings
  var toppingsArr = [];
  $('input[name="toppings"]:checked').each(function () {
    toppingsArr.push(this.value);
  });

  var pizzaPlaza = new PizzaPlaza(
    productName,
    selectedPizzaSize,
    selectedPizzaSCrust,
    toppingsArr,
    quantity
  );

  document.getElementById("lblproductName").innerHTML = productName;
  document.getElementById("pizzaSize").innerHTML = selectedPizzaSize;
  document.getElementById("pizzaCrust").innerHTML = selectedPizzaSCrust;
  document.getElementById("pizzaToppings").innerHTML = toppingsArr;
  document.getElementById("pizzaSizePrice").innerHTML =
    pizzaPlaza.priceBySize();
  document.getElementById("pizzaCrustPrice").innerHTML =
    pizzaPlaza.crustPrice();
  document.getElementById("pizzaToppingsPrice").innerHTML =
    pizzaPlaza.toppingsPrice();
  document.getElementById("pizzaPickup").innerHTML =
    pizzaPlaza.totalPricePickUp();
  document.getElementById("pizzaPricePerQuantity").innerHTML =
    pizzaPlaza.pricePerQuantity();

  console.log(productName);
  console.log(selectedPizzaSize);
  console.log(selectedPizzaSCrust);
  console.log(toppingsArr);
  console.log(pizzaPlaza.priceBySize());
  console.log(pizzaPlaza.crustPrice());
  console.log(pizzaPlaza.toppingsPrice());
  console.log(pizzaPlaza.totalPricePickUp());
  console.log(pizzaPlaza.pricePerQuantity());
  $("#checkout").show();
  $("#myModal").modal("hide");
});
$("#delivery").click(function () {
  $("#deliveryDetails").show()
  
})
$("#pickUp").click(function () {
  $("#deliveryDetails").hide();
  
})

$("#showAlert").click(function () {
  $("#alertSummary").show();
 
})


