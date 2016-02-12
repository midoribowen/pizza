// Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.
//
// Allow the user to choose toppings and size for the pizza theyd like to order.
// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

describe('Pizza', function() {
  it("creates a pizza object with size, firstTopping, and toppings properties", function() {
    var testPizza = new Pizza("Large", "none");
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.firstTopping).to.equal("none");
    expect(testPizza.toppings).to.eql([]);
  });
});

describe('Topping', function() {
  it("creates a new topping with topping properties and pizza it's going on", function() {
    var testPizza = new Pizza("Large", "peppers");
    var testTopping = new Topping(testPizza, "mushrooms", "Vegetable");
    expect(testTopping.pizza).to.equal(testPizza);
    expect(testTopping.name).to.equal("mushrooms");
    expect(testTopping.type).to.equal("Vegetable");
  });

// TODO: fix bug to calculate price of multiple toppings

  it("gets the price of multiple toppings", function() {
    var testPizza = new Pizza("Large", "peppers");
    var toppingOne = new Topping(testPizza, "mushrooms", "Vegetable");
    var toppingTwo = new Topping(testPizza, "olive", "Vegetable");
    var toppingThree = new Topping(testPizza, "peppers", "Vegetable");
    var toppingFour = new Topping(testPizza, "sausage", "Meat");
    // var toppings;
    // var allToppings = toppings.push(toppingOne);
    expect(toppingFour.getAllToppingsPrice()).to.equal(8.5);
  });

  // it("gets the price of a large pizza with sausage", function() {
  //   var testPizza = new Pizza("Large", "mushrooms");
  //   var toppingTwo = new Topping(testPizza, "sausage", "Meat");
  //   expect(toppingTwo.getTotalPrice()).to.equal(22.5);
  // });

  // it("adds the cost of an additional topping", function() {
  //   var testPizza = new Pizza("Large");
  //   var testTopping = new Topping("mushrooms", "vegetable");
  //   expect(testPizza.getPrice()).to.equal(17);
  // });
});
