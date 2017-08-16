"use strict";
// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];
switch (color) {

    case "red":
        console.log("Cardinals are red.");
        break;
    case "yellow":
        console.log("Canaries are yellow");
        break;
    case "orange":
        console.log("Safety cones are orange.");
        break;
    case "green":
        console.log("Hummingbirds are green.");
        break;
    case "blue":
        console.log("Blue jays are blue, duh.");
        break;
    default :
        console.log("What other colors are there, really?");
        break;

}
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.
    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.


// HEB dicount


// var ryan = 250;
// var cameron = 180;
// var george = 320;
// var ryanDiscount = (ryan - ryan * .1);
//
// if (ryan > 200) {
//     console.log("Ryan you spent " + ryan + ", you are awarded a discount of 10%. Your new total is " + ryanDiscount);
// } else {
//     console.log("Sorry discount doesn't apply.");
// }

// solution --------

var minSale = 200;

// input -> How much each person bought

var cameronTotal = 180;
var ryanTotal = 250;
var georgeTotal = 320;

//process use condtional

minSale = 200;
var discountCameron;

if (cameronTotal > minSale) {
    discountCameron = .9 * cameronTotal;
} else {
    discountCameron = cameronTotal;
}

var discountRyan;

if (ryanTotal > minSale) {
    discountRyan = .9 * ryanTotal;
} else {
    discountRyan = ryanTotal;
}

// output
console.log("Cameron's total equals $" + cameronTotal + " Cameron's total after discount is $" + discountCameron);
console.log("Ryan's total equals $" + ryanTotal + " Ryan's total after discount is $" + discountRyan);




// new hous or new car.
var flipACoin = Math.floor(Math.random()*2);

// if (flipACoin === 0) {
//     console.log("Buy a car");
// } else {
//     console.log("Buy a house");
// }

// flipACoin solution -----

var message;

if (flipACoin === 0) {
    message = "Buy a new car";
} else {
    message = "Buy a house";
}


// ternary operator -------

var message2;
message2 = flipACoin === 0 ? "Buy a car" : "Buy a house";

console.log(message);
console.log(message2);


// lucky number discount
var luckyNumber = Math.floor(Math.random()*6);
var subtotal = 60;
var grandTotal;
var discount;


switch (luckyNumber) {
    case 0 :
        grandTotal = 60;
        discount = grandTotal;
        break;
    case 1 :
        grandTotal = subtotal - subtotal * .10;
        discount = grandTotal;
        break;
    case 2 :
        grandTotal = subtotal - subtotal * .25;
        discount = grandTotal;
        break;
    case 3 :
        grandTotal = subtotal - subtotal * .30;
        discount = grandTotal;
        break;
    case 4 :
        grandTotal = subtotal - subtotal * .50;
        discount = grandTotal;
        break;
    case 5 :
        grandTotal = 0;
        discount = grandTotal;
        break;

}

console.log("Hey, your lucky number is " + luckyNumber + "! Your new total is $" + discount + ".");


//odd or even number-----solution

var maybe = confirm("Would you like to enter a number?");


if ( maybe === true) {
    var maybeAnumber = prompt("What's your number?");
    if (isNaN(maybeAnumber)) {
        alert("Hey, that's not a number!");
    } else {
        if (maybeAnumber % 2 === 0) {
            alert("Your number is even.");
        } else {
            alert("Your number is odd.");
        }
        alert(Number(maybeAnumber) + 100);
        if (maybeAnumber > 0) {
            alert("Your number is the glass is half full type of number.");
        } else {
            alert("Your number is the glass is half empty type of number.");
        }
    }

}

