//-------------- Google Maps API ------------------ \\

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.350140, lng: -6.25972 },
    zoom: 11,
  });

// Map Markers for Restaurants
var restaurantMarkers = [
    {
        location: {lat:53.35441990342235,lng:-6.263952129450252},
        content: "<h4>Chapter One</h4>"
    },
    {
        location: {lat:53.34712459638529,lng:-6.268370298694105},
        content: "<h4>Brother Hubbard</h4>"
    },
    {
        location: {lat:53.33699287623336,lng:-6.273068559230834},
        content: "<h4>The Fumbally</h4>"
    },
    {
        location: {lat:53.3298763791307,lng:-6.271765476429289},
        content: "<h4>Locks Windsor Terrace</h4>"
    },
    {
        location: {lat:53.346911147985274,lng:-6.2556921832498436},
        content: "<h4>The Vintage Kitchen</h4>"
    },
    {
        location: {lat:53.358844802313236,lng:-6.2545826068658945},
        content: "<h4>Wallace's Asti </h4>"
    },
        {
        location: {lat:53.34685523143547,lng:-6.279105135490152},
        content: "<h4>Urbanity</h4>"
    },
        {
        location: {lat:53.33156818578229,lng:-6.25158695818032},
        content: "<h4>The Sussex Restaurant</h4>"
    }
];

// Add marker function

    function addMarker(property){
        var marker = new google.maps.Marker({
            position: property.location,
            map:map,
        })
            // Add Info window

        var infoWindow = new google.maps.InfoWindow({
            content: property.content
        });

        marker.addListener("click",function(){
            infoWindow.open(map,marker);
        });
}

// Loop for adding markers of restaurants
    for(var i = 0; i < restaurantMarkers.length; i++) {
         addMarker(restaurantMarkers[i]);
    }
}