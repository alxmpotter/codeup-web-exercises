(function() {
    "use strict";

    // create a circle object
    //
    var circle = {
        radius: 3,

        getArea: function () {
            var area = Math.PI * Math.pow(this.radius, 2);
            return area;
        },

        //doRounding is a boolean flag, that will either round or not

        logInfo: function (doRounding) {
                var circleArea;
                if (doRounding){
                    circleArea = Math.round(this.getArea());
                } else {
                    circleArea = this.getArea();
                }
                // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + circleArea);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");

    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();