function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

function Topping(pizza, name, type) {
  this.pizza = pizza;
  this.name = name;
  this.type = type;
}

// Topping.prototype.getPrice = function() {
//   var totalPrice = 0;
//
//   var smallPrice = 12;
//   var smallVegetableToppingPrice = 1;
//   var smallMeatToppingPrice = 1.5;
//
//   var mediumPrice = 15;
//   var mediumVegetableToppingPrice = 1.5;
//   var mediumMeatToppingPrice = 2;
//
//   var largePrice = 20;
//
//   if (this.pizza.size === "Large") {
//     totalPrice += largePrice;
//   } else if (this.pizza.size === "Medium") {
//     totalPrice += mediumPrice;
//   } else if (this.pizza.size === "Small") {
//     totalPrice += smallPrice;
//   }
//
//   if (this.type === "Vegetable" && this.pizza.size === "Small") {
//     totalPrice += smallVegetableToppingPrice;
//   } else if (this.type === "Meat" && this.pizza.size === "Small") {
//     totalPrice += smallMeatToppingPrice;
//   }
//
//
//   return totalPrice;
// }
