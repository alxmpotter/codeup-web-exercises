"use strict";

for (var i = 1; i <= 50; i++) {

    if (i === 27){
        console.log("Yikes! Skipping number: 27");
        continue;
    }

    if (i % 2 == 1) {
        console.log("Here is an odd number: " + i);
    }
}
