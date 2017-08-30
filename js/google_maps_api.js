(function() {
    "use strict";

    var address = "4917 Airport Blvd, Austin, TX 78751";

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { "address" : address }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP
        });
        var infowindow = new google.maps.InfoWindow({
        content: "<strong>Kome</strong><br>Sushi! Need I say more?"
        });

        marker.addListener("click", function() {
        infowindow.open(map, marker);
        });
        } else {
            alert("Geocoding was not successful - STATUS: " + status)
        }
    });

    // marker.setMap(map);
    //create variable for lat/lng locations to use for address position on map
    //create map options object to store location and zoom info
    // var kome = { lat: 30.310777, lng: -97.715104 };

    var mapOptions = {
        zoom: 15,
        center: address
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //marker, to add marker to location, added animation to pin drop, drops from top with a bounce
    // marker.addListner("click", toggleBounce);
    //
    // function toggleBounce() {
    //     if (marker.getAnimation() !== null) {
    //         marker.setAnimation(null);
    //     } else {
    //         marker.setAnimation(google.maps.Animation.BOUNCE);
    //     }
    // }

    //call marker function to place on map

    //info window object, to add content to marker object

})();





