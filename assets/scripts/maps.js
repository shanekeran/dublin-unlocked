//-------------- Google Maps API ------------------ \\

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.350140, lng: -6.25972 },
    zoom: 11,
  });

  // Array for active markers
  var activeMarkers = [];

  // Add info windows for markers.

  var infoWindow = new google.maps.InfoWindow();

  // Add marker function

    function addMarker(property){
        var marker = new google.maps.Marker({
            position: property.location,
            map:map,
        });

        // Markers opened are pushed to an array called activeMarkers.
       
        activeMarkers.push(marker);

        // On click of a marker: Close current info windows and open the current marker with content included.
        marker.addListener("click",function(){
            infoWindow.close();
            infoWindow.setContent(property.content);
            infoWindow.open(map,marker);
        });
        
    }//function add marker ends here

    // Clears all active markers
    function clearMarkers() {
        for (let i = 0; i < activeMarkers.length; i++) {
                activeMarkers[i].setMap(null);
            }
            activeMarkers = [];
        }

    // Button click functions to show markers
    $("#map-button1").on("click", function(){
        clearMarkers();
        if($("#map-span-1").html()==="Restaurants"){
            showMarkers(restaurantMarkers);
           map.setZoom(12);
        } else{
            showMarkers(takeawayMarkers);
            map.setZoom(13);
        }
    });
    $("#map-button2").on("click",function(){
        clearMarkers();
        if($("#map-span-2").html()==="Parks"){
            showMarkers(parksMarkers);
           map.setZoom(11);
        } else {
            showMarkers(pubMarkers);
           map.setZoom(13);
        }
    });

    $("#map-button3").on("click",function(){
        clearMarkers();
        if($("#map-span-3").html()==="Theatres"){
            showMarkers(theatreMarkers);
            map.setZoom(13);
        } else{
            showMarkers(clubMarkers);
            map.setZoom(12);
        }
    });

    $("#map-button4").on("click",function(){
        clearMarkers();
        showMarkers(placeMarkers);
        map.setZoom(12);
    });


    function showMarkers(markers){
        for(var i = 0; i < markers.length; i++) {
                        addMarker(markers[i]);
                    }
        map.setCenter({lat: 53.350140, lng: -6.25972});
    }

    // Map Markers for day activities
    var restaurantMarkers = [
        {
            location: {lat:53.35441990342235,lng:-6.263952129450252},
            content: "<h4>Chapter One</h4> <p>Fine-dining restaurant</p>"
        },
        {
            location: {lat:53.34712459638529,lng:-6.268370298694105},
            content: "<h4>Brother Hubbard</h4><p>Cool and cosy independent cafe</p>"
        },
        {
            location: {lat:53.33699287623336,lng:-6.273068559230834},
            content: "<h4>The Fumbally</h4><p>Community cafe serving an eclectic menu of health conscious dishes and locally roasted coffee.</p>"
        },
        {
            location: {lat:53.3298763791307,lng:-6.271765476429289},
            content: "<h4>Locks Windsor Terrace</h4><p>Locally sourced fine dining in a chic space.</p>"
        },
        {
            location: {lat:53.346911147985274,lng:-6.2556921832498436},
            content: "<h4>The Vintage Kitchen</h4><p>Modern Irish dishes in a relaxed, vintage-style BYOB restaurant</p>"
        },
        {
            location: {lat:53.358844802313236,lng:-6.2545826068658945},
            content: "<h4>Wallace's Asti</h4><p>Sardinian restaurant</p>"
        },
            {
            location: {lat:53.34685523143547,lng:-6.279105135490152},
            content: "<h4>Urbanity</h4><p>Modern dining venue with a focus on fresh, organic dishes and coffee roasted in-house</p>"
        },
            {
            location: {lat:53.33156818578229,lng:-6.25158695818032},
            content: "<h4>The Sussex Restaurant</h4><p>Classy bistro with panelled walls and dark wood floors, for unpretentious seasonal Irish cooking.</p>"
        }
    ];

    var parksMarkers = [
        {   
            location: {lat:53.3557716471892,lng:-6.3298363476550925},
            content: "<h4>Phoenix Park</h4><p>One of the largest enclosed recreational spaces within any European capital city.</p>"

        },
        {   
            location: {lat:53.33812000626964,lng:6.3298363476550925},
            content: "<h4>St Stephen's Green</h4><p>City centre park with ornamental lake, waterfall, sculptures and a children's playground.</p>"

        },
        {   
            location: {lat:53.339684791859355,lng:-6.249239751638084},
            content: "<h4>Merrion Square</h4><p>Leafy park with floral and heather gardens, playground and notable Oscar Wilde statue.</p>"

        },
        {   
            location: {lat:53.33525993152436,lng:-6.260959053351073},
            content: "<h4>Iveagh Gardens</h4><p>A National, as opposed to a municipal park, and designated as a National Historic Property.</p>"

        },
        {   
            location: {lat:53.327345238744854,lng:6.236112437057162},
            content: "<h4>Herbert Park</h4><p>Beautiful public park in Ballsbridge</p>"

        },
        {   
            location: {lat:53.34150946419814,lng:6.2224194400413815},
            content: "<h4>Ringsend Park</h4><p>A mid sized park with plenty of sports facilities.</p>"

        },
        {   
            location: {lat:53.371744418201125,lng:-6.178802520201377},
            content: "<h4>Saint Anne's Park</h4><p>240 acres public park with plenty of sports facilities.</p>"

        },
        {   
            location: {lat:53.372578108130725,lng:-6.2720217432234255},
            content: "<h4>National Botanic Gardens</h4><p>Botanical garden in Glasnevin, 5 km north-west of Dublin city centre</p>"

        },
        {   
            location: {lat:53.37730978686308,lng:-6.303144764855486},
            content: "<h4>Tolka Valley Park</h4><p>Large park with a golf course and a river for fishing.</p>"

        },
        {   
            location: {lat:53.34447165075605,lng:-6.318114004602383},
            content: "<h4>Irish National War Memorial Park</h4><p>Dedicated to the memory of the 49,400 Irish soldiers who gave their lives in the Great War, 1914–1918.</p>"

        }
    ];

    var placeMarkers = [
        {   
            location: {lat:53.34289926451081,lng:-6.267380102660142},
            content: "<h4>Dublin Castle</h4><p>Dublin Castle is a major Irish government complex, conference centre, and tourist attraction, of serious historical importance.</p>"

        },
        {   
            location: {lat:53.34353777163255,lng:-6.270908759708779},
            content: "<h4>Christ Church Cathedral</h4><p>Dublin's oldest building. A working cathedral, it is renowned for its magnificent architecture and fascinating history.</p>"

        },
        {   
            location: {lat:53.346307709130365,lng:-6.263086562536631},
            content: "<h4>Ha'penny Bridge</h4><p>Pedestrian bridge built in May 1816 over the River Liffey.</p>"

        },
        {   
            location: {lat:53.34989123569018,lng:-6.260232552835892},
            content: "<h4>The Spire</h4><p>Large, stainless steel, pin-like monument 120 metres in height.</p>"

        },
        {   
            location: {lat:53.340245896543756,lng:-6.254576110145122},
            content: "<h4>National Museum of Ireland- Archaeology</h4><p>The history of Ireland from the Stone Age to the Late Middle Ages.</p>"

        },
        {   
            location: {lat:53.34213087932087,lng:-6.286829126034628},
            content: "<h4>Guinness Storehouse</h4><p>Brewery experience telling the tale of Ireland's famous beer, with tastings and a rooftop bar.</p>"

        },
        {   
            location: {lat:53.34394471053305,lng:-6.3097819251488545},
            content: "<h4>The Book of Kells</h4><p>Grand library location for illuminated illustrations of the Christian Gospels dating from 800AD.</p>"

        },
        {   
            location: {lat:53.34188411861057,lng:-6.3097819251488545},
            content: "<h4>Kilmainham Gaol</h4><p>Former prison which is now a museum.</p>"

        }
    ];

    var theatreMarkers = [
        {   
            location: {lat:53.35127963967363,lng:-6.260471051472172},
            content: "<h4>Savoy Cinema</h4><p>Oldest operational cinema in Dublin</p>"

        },
        {   
            location: {lat:53.35024903442389,lng:-6.267647705179361},
            content: "<h4>Cineworld Cinema</h4><p>Biggest cinema in Ireland, with 4 floors and 17 screens.</p>"

        },
        {   
            location: {lat:53.348529201046574,lng:-6.227538926019539},
            content: "<h4>ODEON</h4><p>State-of-the-art chain cinema for blockbusters in 2-D or 3-D format, plus family and student deals.</p>"

        },
        {   
            location: {lat:53.34881080245434,lng:-6.279028308549553},
            content: "<h4>Light House Cinema</h4><p>An eclectic schedule of features, shorts, classics, foreign language and animated films.</p>"

        },
        {   
            location: {lat:53.348416179396395,lng:-6.257121610527241},
            content: "<h4>Abbey Theatre</h4><p>Also known as the National Theatre of Ireland. It is one of the country's leading cultural institutions.</p>"

        },
        {   
            location: {lat:53.34835401965633,lng:-6.255652622986885},
            content: "<h4>Liberty Hall Theatre</h4><p>Performing arts theater</p>"

        },
        {   
            location: {lat:53.34419831758027,lng:-6.23998835680323},
            content: "<h4>Bord Gais Energy Theatre</h4><p>Performing arts venue. It is Ireland's largest fixed-seat theatre.</p>"

        },
        {   
            location: {lat:53.340473821630326,lng:-6.261553815441377},
            content: "<h4>The Gaiety Theatre</h4><p>Classical Victorian auditorium for an array of performances especially musical theatre and opera.</p>"

        }
    ];

    // Map markers for night activities
    var takeawayMarkers = [
            {   
            location: {lat:53.34733697075942,lng:-6.26049272396139},
            content: "<h4>Apache Pizza</h4>"
        },
        {   
            location: {lat:53.35027326583911,lng:-6.260940745901634},
            content: "<h4>McDonald's</h4>"
        },
        {   
            location: {lat:53.34430514712553,lng:6.24925063100184},
            content: "<h4>Camile Thai</h4>"
        },
        {   
            location: {lat:53.343401756735155,lng:-6.281471915144254},
            content: "<h4>Morelli's Take-Away</h4>"
        },
        {   
            location: {lat:53.353989066499864,lng:-6.258395874737682},
            content: "<h4>Turkish Kebab House</h4>"
        }
    ];

    var pubMarkers = [
        {   
            location: {lat:53.34548057827882,lng:-6.26415886437266},
            content: "<h4>The Temple Bar</h4><p>Tourist Hot spot, with a very scenic exterior.</p>"
        },
        {   
            location: {lat:53.352475001610486,lng:-6.260873326377316},
            content: "<h4>Murray's Pub</h4><p>Large, lively bar for comfort food and sports on TV, plus live traditional Irish music at weekends.</p>"
        },
        {   
            location: {lat:53.3401397985097,lng:-6.261556905432879},
            content: "<h4>Sinnotts Bar</h4><p>Traditional Irish pub that is usually packed out for the big GAA, football and rugby matches.</p>"
        },
        {   
            location: {lat:53.34493748406489,lng:-6.2763063372478305},
            content: "<h4>The Brazen Head</h4><p>Meeting place for historic rebels, this brass-filled, lantern-lit pub hosts live music each night.</p>"
        },
        {   
            location: {lat:53.34343420722004,lng:-6.259659596893519},
            content: "<h4>O'Donoghue's Bar</h4><p>Renowned traditional music pub with packed nightly live sessions and simple en suite bedrooms.</p>"
        },
        {   
            location: {lat:53.34510403588452,lng:-6.267380278263293},
            content: "<h4>Porterhouse</h4><p>Constantly changing menu of own ales, lagers and stouts with an Irish menu and folksy atmosphere.</p>"
        },
        {   
            location: {lat:53.345572458250594,lng:-6.265117197286319},
            content: "<h4>Fitzsimons</h4><p>Bustling nightclub offering casual rooms with free Wi-Fi & breakfast, plus an eatery & live music.</p>"
        },
        {   
            location: {lat:53.35658901024224,lng:-6.27383148096128},
            content: "<h4>McGowans</h4><p> Bar with Nightclub upstairs.</p>"
        }
    ]; 

    var clubMarkers = [
        {   
            location: {lat:53.33782964345892,lng:-6.252707575105134},
            content: "<h4>Xico</h4><p>Underground Mexican styled party cavern.</p>"
        },
        {   
            location: {lat:53.335878563814866,lng:-6.263534179338474},
            content: "<h4>Dicey's</h4><p>No-frills rooms and posh suites in a Georgian hotel with a party vibe in its bar and 2 nightspots.</p>"
        },
        {   
            location: {lat:53.344839566775626,lng:-6.262187946334563},
            content: "<h4>Club M</h4><p>The popular music policy ranges from hip hop to trance at this spacious and lively night club.</p>"
        },
        {   
            location: {lat:53.344839566775626,lng:-6.262187946334563},
            content: "<h4>Tramline</h4><p>A unique bar and events venue with three spaces to suit your mood. Come for a club night, gig, or hire the space for your corporate event</p>"
        },
        {   
            location: {lat:53.34666494427766,lng:-6.279729689875963},
            content: "<h4>Index</h4><p>Nightclub</p>"
        },
    ];

} // init map ends here