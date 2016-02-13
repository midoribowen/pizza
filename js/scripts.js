function Pizza(size, firstTopping) {
  this.size = size;
  this.firstTopping = firstTopping;
  this.toppings = [];
}

function Topping(name, type) {
  this.name = name;
  this.type = type;
}

Pizza.prototype.getTotalPrice = function() {
  var basePrice = 0;

  var toppingsPrice = 0;

  var smallPrice = 12;
  var smallVegetableToppingPrice = 1;
  var smallMeatToppingPrice = 1.5;

  var mediumPrice = 15;
  var mediumVegetableToppingPrice = 1.5;
  var mediumMeatToppingPrice = 2;

  var largePrice = 20;
  var largeVegetableToppingPrice = 2;
  var largeMeatToppingPrice = 2.5;

  if (this.size === "Small") {
    basePrice += smallPrice;
    this.toppings.forEach(function(topping) {
      if (topping.type === "Vegetable") {
        toppingsPrice += smallVegetableToppingPrice;
      } else if (topping.type === "Meat") {
        toppingsPrice += smallMeatToppingPrice;
      }
    });
  }

  if (this.size === "Medium") {
    basePrice += mediumPrice;
    this.toppings.forEach(function(topping) {
      if (topping.type === "Vegetable") {
        toppingsPrice += mediumVegetableToppingPrice;
      } else if (topping.type === "Meat") {
        toppingsPrice += mediumMeatToppingPrice;
      }
    });
  }
  if (this.size === "Large") {
    basePrice += largePrice;
    this.toppings.forEach(function(topping) {
      if (topping.type === "Vegetable") {
        toppingsPrice += largeVegetableToppingPrice;
      } else if (topping.type === "Meat") {
        toppingsPrice += largeMeatToppingPrice;
      }
    });
  }

  var totalPrice = basePrice + toppingsPrice;
  return totalPrice;
}


$(function() {

// FORM#BASE-PIZZA NOT ADDING TOPPING PROPERLY
// TO-TRY: PUT BASE-PIZZA INTO ON CLICK FUNCTION, SO THAT BASE-PIZZA APPEARS IN ORDER BUT CAN RECEIVE ADDITIONS
// THEN: ADD SUBMIT BUTTON EVENT TO SUBMIT A PIZZA ORDER?


  $("form#base-pizza").submit(function(event) {
    event.preventDefault();
    var toppings = [];
    var sizeInput = $("select#size").val();
    var firstToppingInput = $("select#first-topping").val();
    var newPizza = new Pizza(sizeInput, firstToppingInput);

    $("select#size").val("");
    $("select#first-topping").val("");

    $("#show-order").show();
    $("#show-order h2").text(newPizza.size);
    $("ul#toppings").text("");
    $("ul#toppings").append("<li>" + newPizza.firstTopping + " (Free)</li>")

  });


  // $("form#add-topping").submit(function() {
  //   event.preventDefault();
  //   var toppings = [];
  //   $("#add-topping").each(function() {
  //     var additionalToppingInput = $("select#additional-topping").val();
  //     var topping = new Topping(additionalToppingInput);
  //     newPizza.toppings.push(topping);
  //   });
  //
  //   $("select#additional-topping").val("");
  //
  //   $("ul#toppings").text("");
  //   newPizza.toppings.forEach(function(topping) {
  //     $("ul#toppings").append("<li>" + topping.name + "</li>")
  //   });
  // });

});
