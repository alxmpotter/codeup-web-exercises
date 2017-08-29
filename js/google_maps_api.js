// (function () {
//     "use strict";
//     var mapOptions = {
//         zoom: 19,
//         center: {
//             lat: 29.426791,
//             lng: -98489602
//         }
//     };
//
//
//
// })
    // var address = "1141 Don Ann st, Austin, TX, 78721";
(function() {
    "use strict";
    var mapOptions = {
        zoom: 10,
        center: { lat: 29.426791, lng: -98.489602 }

    };

    // var marker = new google.maps.Marker({
    //     position: address,
    //     mapCanvas: mapCanvas
    // });

    var mapCanvas = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


})();





    // var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);



// (function() {
//     "use strict";
//
//     // Set our map options
//     var mapOptions = {
//         // Set the zoom level
//         zoom: 19,
//
//         // This sets the center of the map at our location
//         center: {
//             lat:  29.426791,
//             lng: -98.489602
//         }
//     };
//
//     // Render the map
//     var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
// })();