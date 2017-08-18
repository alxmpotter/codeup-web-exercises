(function() {
    "use strict";


    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     *  > sayHello("codeup") // returns "Hello, codeup!"
     */

    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     * console.log 'helloMessage' to check your work
     * Now store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */

    function sayHello(name) {
        return "Hello " + name;
    }

    var myName = "Alex";
    var helloMessage = sayHello(myName);

    console.log(helloMessage);

    /**
     * TODO:
     * Create a function called 'isOdd' that takes a number as a parameter.
     * The function should use the ternary operator to return a message.
     * The message should contain the number being checked, and whether or not the
     * number is odd
     *
     * Example
     *  > isOdd(42) // returns "42 is not odd!"
     *
     * Call the function 'isOdd' passing the variable 'random' as a parameter.
     * console.log *outside of the function* to check your work
     */

// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
    var random = Math.floor((Math.random() * 100) + 1);


    function isOdd(number) {
        var x = (number % 2 == 1) ? number + " is odd." : number + " is even.";
        return x;
    }

    console.log(isOdd(random));

    /**
     * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant
     *
     * the function should accept a tip percentage and the total of the bill, and
     * return the amount to tip
     *
     * Example
     *  > calculateTip(0.20, 20) // returns 4
     */

    var bill = Math.floor(Math.random() * 180) + 20;
    var tip = Math.floor(Math.random() * 40) + 10;

    console.log("Total bill = $" + bill);
    console.log("Percentage you'd like to tip = " + tip + "%");

    function calculateTip(tip, bill) {
        var tipAmount = (bill * tip) / 100;
        return tipAmount;
    }

    console.log("Amount to tip = $" + calculateTip(tip, bill));

    /**
     * TODO: use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */

    var billTotal = prompt("What's your bill total?");

    var tipPercent = prompt("What percentage would you like to tip?");

    if (tipPercent <= 15) {
        alert("Really? That's pretty low, but ok...");
    }

    alert("$" + calculateTip(tipPercent, billTotal));

})();