(function(){
"use strict";

    var names = ["Luke", "Han-Solo", "Chewbaca", "Leia"];

    console.log("Inside this array there are " + names.length + " names.");

    console.log("The first name is, " + names[0] + ".");
    console.log("The first name is, " + names[1] + ".");
    console.log("The first name is, " + names[2] + ".");
    console.log("The first name is, " + names[3] + ".");

    //different way to create array
    // var names = new Array("name1", "name2", "name3 ", "name4");

    //for loop

    for (var i = 0; i < names.length; i++) {
        console.log(names[i] = names[i]);
        // console.log("the name at index " + i + " is " + names[i]);
    }

     names.forEach( function (element, index, array) {
         console.log(element);
     });

})();


