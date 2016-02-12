// Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.
//
// Allow the user to choose toppings and size for the pizza theyd like to order.
// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

describe('Pizza', function() {
  it("creates a pizza object with size and toppings properties", function() {
    var testPizza = new Pizza("Large");
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.toppings).to.eql([]);
  });
});

describe('Topping', function() {
  it("creates a new topping with topping properties and pizza it's going on", function() {
    var testPizza = new Pizza("Large");
    var testTopping = new Topping(testPizza, "mushrooms", "Vegetable");
    expect(testTopping.pizza).to.equal(testPizza);
    expect(testTopping.name).to.equal("mushrooms");
    expect(testTopping.type).to.equal("Vegetable");
  });

  // it("gets the price of a pizza with sausage", function() {
  //   var testPizza = new Pizza("Small");
  //   var toppingTwo = new Topping(testPizza, "sausage", "Meat");
  //   expect(toppingTwo.getPrice()).to.equal(13.5);
  // });
  // it("adds the cost of an additional topping", function() {
  //   var testPizza = new Pizza("Large");
  //   var testTopping = new Topping("mushrooms", "vegetable");
  //   expect(testPizza.getPrice()).to.equal(17);
  // });
});
