//-------------- Dark / Light mode ------------------ \\

$( document ).ready(function() {

    const blackLogo = "assets/images/nav-logo.png";
    const whiteLogo = "assets/images/nav-logo-night.png";

    // On click of the enter button it will hide splash page and show the main content.
    $("#enter-button").on("click", function() {
        $("#splash-page").hide();
        $("#main-content").css("display","block");
    }); 

    // Changes made on "click" of the Night and Day buttons.
    $("#time-button").on("click", function(){

        // Change text and colour of time button
        $("#time-button").toggleClass("day-button night-button");
        $("#button-text").text($("#button-text").text() == "Night" ? "Day":"Night");

        // Toggles icon in time button
        $("#time-button").children(".fas").toggleClass("fa-moon fa-cloud-sun");

        // Background colour toggle
        $("body").toggleClass("night-bg day-bg");

        // Image changes Day / Night toggle
        $("#home-image").toggleClass("home-image-night home-image-day");
        $("#attractions-image").toggleClass("attractions-image-night attractions-image-day");
        $("#events-image").toggleClass("events-image-night events-image-day");
        $("#weather-image").toggleClass("weather-image-night weather-image-day");
        $(".section-title").toggleClass("section-title-night");

        // Toggle Navbar font colour 
        $(".nav-link").toggleClass("white-font");
        $(".navbar-toggler").toggleClass("white-font");
        $(".navbar-toggler").toggleClass("white-border");

        // Navbar logo toggle (code learned on stackoverflow [https://stackoverflow.com/questions/19057513/toggling-an-image-src-with-jquery] )
        if($("#nav-logo").attr("src") === blackLogo){
            $("#nav-logo").attr("src", whiteLogo)
            }else {
                $("#nav-logo").attr("src", blackLogo)
            };
        
        //Changes button options in the Attractions settings
        if($("#map-span-1").html()===("Takeaways")){
            $("#map-span-1").html("Restaurants")
            $("#map-span-2").html("Parks")
            $("#map-span-3").html("Theatres")
        } else {
            $("#map-span-1").html("Takeaways")
            $("#map-span-2").html("Pubs")
            $("#map-span-3").html("Nightclubs")
        };

        //Changes Attraction button icons
        $("#icon1").toggleClass("fa-hamburger fa-utensils");
        $("#icon2").toggleClass("fa-beer fa-tree");
        $("#icon3").toggleClass("fa-music fa-film");

        // Changes text colour for Back to top link and Social media icons
        $("#back-top").children().toggleClass("white-font");
        $("#footer-content").children("a").toggleClass("white-font");

    }); 
});

//-------------- Weather API ------------------ \\
var request = new XMLHttpRequest()

request.open('GET', 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=8KVKK772DZ7G34C7C4PNPX5LQ&dataElements=default&locations=Dublin%2CIE', true)

request.onload = function () {
  // Accessing JSON data
  var weatherData = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
    console.log("Success")
    for (let i = 0; i < 5;i++) {
        const forecast = weatherData.location.values[i];
        const epochDate = new Date(forecast.datetime); // code source: https://stackoverflow.com/questions/25445377/how-to-get-current-date-without-time
        const date =  epochDate.getDate()+"/"+(epochDate.getMonth()+1)+"/"+epochDate.getFullYear(); // converts epoch date to dd/mm/yyyy  // code source: https://stackoverflow.com/questions/25445377/how-to-get-current-date-without-time
        const dateElement = $(".date")[i];
        const iconElement = $(".w-icon")[i];
        var conditionsElement = $(".conditions")[i];
        const tempElement = $(".max-temp")[i]; 
        const precipElement = $(".precip")[i];

        $(dateElement).html(date); // Adds each date above forecast
        $(conditionsElement).html(forecast.conditions); // Adds daily forecasted conditions
        $(tempElement).html(forecast.maxt+"℃"); // Adds daily max temperature
        $(precipElement).html(forecast.precip+"mm"); // Adds daily precipitation level

        // Display weather icon depending on the current condition forecasted.

        switch(forecast.conditions){
            case "Rain":
                $(iconElement).attr("src","assets/images/weather/rain.png");
                break;
            case "Rain, Overcast":
                $(iconElement).attr("src","assets/images/weather/rain.png");
                break;
            case "Rain, Partially cloudy":
                $(iconElement).attr("src","assets/images/weather/rain.png");
                break;
            case "Overcast":
                $(iconElement).attr("src","assets/images/weather/cloudy.png");
                break;
            case "Partially cloudy":
                $(iconElement).attr("src","assets/images/weather/cloudy.png");
                break;
            case "Sunny":
                $(iconElement).attr("src","assets/images/weather/sunny.png");
                break;
            case "Snow":
                $(iconElement).attr("src","assets/images/weather/snow.png");
                break;
            case "Snow, Overcast":
                $(iconElement).attr("src","assets/images/weather/snow.png");
                break;
            default:
                $(iconElement).attr("src","assets/images/weather/sunny.png");
        } // End of Switch statement
  } 
} else{
console.log("Weather API failed to load");
    for (let i = 0; i < 5;i++) {
        var conditionsElement = $(".conditions")[i];
        const forecastShow= $(".daily-forecast")[3];
        // Display error message
        $(conditionsElement).html("Weather Forecast Unavailable. Please try again later.");
        // Hide forecasts
        $(".daily-forecast").hide();
        // Show the centre forecast only
        $(forecastShow).show();
        // Hide weather information template
        $(".date").hide();
        $(".figures").hide();
    }
}
}
// Send request
request.send()

//-------------- Event API ------------------ \\

var request = new XMLHttpRequest()

request.open("GET","https://app.ticketmaster.com/discovery/v2/events.json?countryCode=IE&apikey=DUV4bAYj0383DtTig69KAtWGmipVv1rt&geoPoint=gc7x&radius=20&sort=random" , true)

request.onload = function () {
  // Accessing JSON data
  var ticketMaster = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    console.log("Success");

    for (let i = 0; i < 12; i++) {
        const eventData = ticketMaster._embedded.events[i];
        const eventTitle = $(".event-name")[i];
        const venue = $(".venue")[i];
        const eventDate = $(".event-date")[i];
        const dateFinder = new Date(eventData.dates.start.localDate);
        const dateFormat =  dateFinder.getDate()+"/"+(dateFinder.getMonth()+1)+"/"+dateFinder.getFullYear();
        const eventUrl = $(".event-url")[i];
        
        $(eventTitle).html(eventData.name);
        $(venue).html(eventData._embedded.venues[0].name);
        $(eventDate).html(dateFormat);
        $(eventUrl).attr("href",eventData.url);
        //for loop iterates through the first 8 images of an event and sets the first image with a width of 1000px+ and a ratio of 16:9.
         for (let j = 0; j < 8; j++) {
            const eventGallery = eventData.images[j];
            const eventImage = $(".event-image")[i];
            if((eventGallery.width > 1000) && (eventGallery.ratio = "16_9")){
                $(eventImage).attr("src", eventGallery.url);
                break;
            } else { // If there are no high quality images then the Dublin unlocked logo is displayed.
                $(eventImage).attr("src", "assets/images/site-logo.png");
            }
            } // end of for loop 
    }// end of for loop

  } else {
    console.log("Event API failed to load");
    for (let i = 0; i < 12; i++) {
        $("#event-api-container").children().hide();
        $("#event-api-container").html("<p>Event information currently unavailable. Please try again later to discover exciting events!.</p>");
    }
};
}
// Send request
request.send()