describe('Pizza', function() {
  it("creates a pizza object with size, firstTopping, and toppings properties", function() {
    var testPizza = new Pizza("Large", "none");
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.firstTopping).to.equal("none");
    expect(testPizza.toppings).to.eql([]);
  });

  it("creates an array with toppings used for a pizza", function() {
    var testPizza = new Pizza("Large", "mushrooms");
    var toppingOne = new Topping("black olives", "Vegetable");
    var toppingTwo = new Topping("green peppers", "Vegetable");
    var toppingThree = new Topping("italian sausage", "Meat");
    testPizza.toppings.push(toppingOne);
    testPizza.toppings.push(toppingTwo);
    testPizza.toppings.push(toppingThree);
    expect(testPizza.toppings[0].type).to.equal("Vegetable");
    expect(testPizza.toppings[1].type).to.equal("Vegetable");
    expect(testPizza.toppings[2].type).to.equal("Meat");
  });

  it("gets the price of a large pizza", function() {
    var testPizza = new Pizza("Large", "mushrooms");
    expect(testPizza.getTotalPrice()).to.equal(20);
  });

  it("gets total price for a large pizza with mushrooms, olives, peppers, and sausage", function() {
    var testPizza = new Pizza("Large", "mushrooms");
    var toppingOne = new Topping("black olives", "Vegetable");
    var toppingTwo = new Topping("green peppers", "Vegetable");
    var toppingThree = new Topping("italian sausage", "Meat");
    testPizza.toppings.push(toppingOne);
    testPizza.toppings.push(toppingTwo);
    testPizza.toppings.push(toppingThree);
    expect(testPizza.getTotalPrice()).to.equal(26.5);
  });

});

describe('Topping', function() {
  it("creates a new topping with topping properties", function() {
    var testTopping = new Topping("mushrooms", "Vegetable");
    expect(testTopping.name).to.equal("mushrooms");
    expect(testTopping.type).to.equal("Vegetable");
  });
});
