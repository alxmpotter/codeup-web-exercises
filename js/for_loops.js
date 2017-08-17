"use strict";

var userNumber = prompt("Choose a number between 1 and 10.");

for (var i = 1; i <= 10; i++) {
    var total = userNumber * i;
    console.log(userNumber + "x" + i + "=" + total);

}


// log 10 random numbers as even or odd---------

for (var i = 1; i <= 10; i++) {
    var x = Math.floor(Math.random() * 180) + 20;

    if (x % 2 == 1) {
        console.log(x + " is odd.");
    } else {
        console.log(x + " is even.")
    }
}

//subtract 5 starting from 100 exercise-----------
// var limit = 100;
// var subtract = 5;

for (var i = 100; i >= 5; i = i - 5) {
    console.log(i);
}