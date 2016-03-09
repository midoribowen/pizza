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

// CURRENT BUGS -
//                 - additional toppings are listed (as null) in orders when disabled is selected
//                 - when a second additional topping is added to the list, the order is deleted and only the additional toppings show
//                 - if pizza is changed, updated totalPrice does not overwrite previous totalPrice

//
// POSSIBLE FIXES -
//                 - put functionality for adding additional toppings in separate column that shows when a base order is added
//                 - put add meat or add vegetable into separate forms within separate column
//                 - create rule that if select tag is set on disable, do not submit that tag?



  $("form#base-pizza").submit(function(event) {
    event.preventDefault();
    var getTotalPrice = 0;
    var sizeInput = $("select#size").val();
    var firstToppingInput = $("select#first-topping").val();
    var toppings = [];
    var newPizza = new Pizza(sizeInput, firstToppingInput);

    $("#new-pizza-topping").each(function() {
      var meatToppingInput = $("select#meat-topping").val();
      var meatTopping = new Topping(meatToppingInput, "Meat");
      newPizza.toppings.push(meatTopping);
      var vegetableToppingInput = $("select#vegetable-topping").val();
      var vegetableTopping = new Topping(vegetableToppingInput, "Vegetable");
      newPizza.toppings.push(vegetableTopping);
    });

    $("select#size").val("");
    $("select#first-topping").val("");

    $("#show-order").show();
    $("#show-order h3").text(newPizza.size);
    $("ul#toppings").text("");
    $("ul#toppings").append("<li>" + newPizza.firstTopping + " (Free)</li>")
    newPizza.toppings.forEach(function(topping) {
      $("ul#toppings").append("<li>" + topping.name + ", " + topping.type + "</li>");
    });
    $("#show-order").append("<h4>" + "Total: $" + newPizza.getTotalPrice().toFixed(2) + "</h4>");
  });

});
