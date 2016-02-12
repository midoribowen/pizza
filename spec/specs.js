// Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.
//
// Allow the user to choose toppings and size for the pizza theyd like to order.
// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

describe('Pizza', function() {
  it("creates a pizza object with size and cost properties", function() {
    var testPizza = new Pizza("Large", 20);
    expect(testPizza.toppings).to.eql([]);
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.cost).to.equal(20);
  });
});
