"use strict";

//say hello function-------------------

    function sayHello(name) {
        return "Hello " + name + "!";
    }

    var myName = "Alex";
    var helloMessage = sayHello(myName);

    console.log(helloMessage);


//number is odd function-----------

// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
    var random = Math.floor((Math.random() * 100) + 1);


    function isOdd(number) {
        return (number % 2 == 1) ? number + " is odd." : number + " is even.";
    }

    console.log(isOdd(random));


//calculate tip function-----------

    // var bill = Math.floor(Math.random() * 180) + 20;
    // var tip = Math.floor(Math.random() * 40) + 10;
    //
    // console.log("Total bill = $" + bill);
    // console.log("Percentage you'd like to tip = " + tip + "%");
    //
    // function calculateTip(tip, bill) {
    //     var tipAmount = (bill * tip) / 100;
    //     return tipAmount;
    // }
    //
    // console.log("Amount to tip = $" + calculateTip(tip, bill));

//bill, tip prompts--------------

    // var billTotal = prompt("What's your bill total?");
    // var tipPercent = prompt("What percentage would you like to tip?");
    //
    // if (tipPercent <= 15) {
    //     alert("Really? That's pretty low, but ok...");
    // }
    //
    // alert("$" + calculateTip(tipPercent, billTotal));


// tip calculator and function together---------

    var billTotal = prompt("What's your bill total?");
    var tipPercent = prompt("What percentage would you like to tip?");

    function calculateTip(bill, percentage) {
        var tipAmount = (bill * percentage) / 100;
        return tipAmount;
    }

    if (tipPercent <= 15) {
        alert("Really? That's pretty low, but ok...");
    }

    alert("$" + calculateTip(billTotal, tipPercent));