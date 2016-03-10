# Pizza Parlor

#### Pizza Making Application, February 12th, 2016

#### By Midori Bowen

## Description

This is a pizza-making application written in Javascript.
A user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

This application was written as a code review of object oriented programming for Week Two of the February 2016 Javascript course at Epicodus.

## Setup/Installation Requirements

* Install Pizza Parlor by cloning this repository
* Open the index.html file in your browser

## Known Bugs

PREVIOUS BUGS -
* additional toppings are listed (as null) in orders when disabled is selected
* when a second additional topping is added to the list, the order is deleted and only the additional toppings show
* Cannot add only one additional topping

  FIX: - separated forms for base-pizza and additional-toppings and nested additional-toppings submit listener inside #base-pizza submit listener
    EG: -JQuery `$("form#additional-toppings").submit(function(event)` submit listener nested inside `$("form#base-pizza").submit(function(event)` submit listener
  FIX: - checked for null topping names in jQuery and only push them to toppings array if name value is not null
    EG: -JQuery `if (meatTopping.name !== null) {
                  newPizza.toppings.push(meatTopping);
                  $("ul#toppings").append("<li>" + meatTopping.name + ", " + meatTopping.type + "</li>");
                  }`

* if pizza is changed, updated totalPrice does not overwrite previous totalPrice

  FIX: - append price in #price span after show-order
    EG: - `$("#price").html("<h4>" + "Total: $" + newPizza.getTotalPrice().toFixed(2) + "</h4>");` and `<span id="price"></span>`

## Technologies Used

Application: Javascript, jQuery, Bootstrap
Testing: Mocha and Chai

### License

Copyright (c) 2016 Midori Bowen

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
