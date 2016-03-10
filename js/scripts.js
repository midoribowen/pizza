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
  $("form#base-pizza").submit(function(event) {
    event.preventDefault();
    var getTotalPrice = 0;
    var sizeInput = $("select#size").val();
    var firstToppingInput = $("select#first-topping").val();
    var toppings = [];
    var newPizza = new Pizza(sizeInput, firstToppingInput);


    $("form#additional-toppings").submit(function(event) {
      event.preventDefault();
      var meatToppingInput = $("select#meat-topping").val();
      var meatTopping = new Topping(meatToppingInput, "Meat");
      if (meatTopping.name !== null) {
        newPizza.toppings.push(meatTopping);
        $("ul#toppings").append("<li>" + meatTopping.name + ", " + meatTopping.type + "</li>");
      }
      var vegetableToppingInput = $("select#vegetable-topping").val();
      var vegetableTopping = new Topping(vegetableToppingInput, "Vegetable");
      if (vegetableTopping.name !== null) {
        newPizza.toppings.push(vegetableTopping);
        $("ul#toppings").append("<li>" + vegetableTopping.name + ", " + vegetableTopping.type + "</li>");
      }

      $("#price").html("<h4>" + "Total: $" + newPizza.getTotalPrice().toFixed(2) + "</h4>");
      $("select#meat-topping").val("");
      $("select#vegetable-topping").val("");
    });

    $("select#size").val("");
    $("select#first-topping").val("");

    $("#show-order").show();
    $("#show-order h3").text(newPizza.size);
    $("ul#toppings").text("");
    $("ul#toppings").append("<li>" + newPizza.firstTopping + " (Free)</li>");
    $("#price").html("<h4>" + "Total: $" + newPizza.getTotalPrice().toFixed(2) + "</h4>");
  });

});
