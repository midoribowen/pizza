function Pizza(size, firstTopping) {
  this.size = size;
  this.firstTopping = firstTopping;
  this.toppings = [];
}

function Topping(pizza, name, type) {
  this.pizza = pizza;
  this.name = name;
  this.type = type;
}

Topping.prototype.getPrice = function() {
  var totalPrice = 0;

  var smallPrice = 12;
  var smallVegetableToppingPrice = 1;
  var smallMeatToppingPrice = 1.5;

  var mediumPrice = 15;
  var mediumVegetableToppingPrice = 1.5;
  var mediumMeatToppingPrice = 2;

  var largePrice = 20;
  var largeVegetableToppingPrice = 2;
  var largeMeatToppingPrice = 2.5;

  if (this.pizza.size === "Large") {
    totalPrice += largePrice;
  } else if (this.pizza.size === "Medium") {
    totalPrice += mediumPrice;
  } else if (this.pizza.size === "Small") {
    totalPrice += smallPrice;
  }

  if (this.type === "Vegetable" && this.pizza.size === "Small") {
    totalPrice += smallVegetableToppingPrice;
  } else if (this.type === "Meat" && this.pizza.size === "Small") {
    totalPrice += smallMeatToppingPrice;
  } else if (this.type === "Vegetable" && this.pizza.size === "Medium") {
    totalPrice += mediumVegetableToppingPrice;
  } else if (this.type === "Meat" && this.pizza.size === "Medium") {
    totalPrice += mediumMeatToppingPrice;
  } else if (this.type === "Vegetable" && this.pizza.size === "Large") {
    totalPrice += largeVegetableToppingPrice;
  } else if (this.type === "Meat" && this.pizza.size === "Large") {
    totalPrice += largeMeatToppingPrice;
  }


  return totalPrice;
}
