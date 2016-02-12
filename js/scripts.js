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
