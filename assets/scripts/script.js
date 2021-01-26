var blackLogo = "assets/images/nav-logo.png";
var whiteLogo = "assets/images/nav-logo-night.png";

$( document ).ready(function() {
    // On click of the enter button it will hide splash page and show the main content.
    $("#enter-button").on("click", function() {
        $("#splash-page").hide();
        $("#main-content").css("display","block");
    }); 
    $("#time-button").on("click", function(){
        $("#time-button").toggleClass("day-button night-button");
        $("#button-text").text($("#button-text").text() == "Night" ? "Day":"Night");
        // Background colour toggle
        $("body").toggleClass("night-bg day-bg");
        // Image changes Day / Night toggle
        $("#home-image").toggleClass("home-image-night home-image-day");
        $("#attractions-image").toggleClass("attractions-image-night attractions-image-day");
        $("#events-image").toggleClass("events-image-night events-image-day");
        $("#weather-image").toggleClass("weather-image-night weather-image-day");
        $("#hotels-image").toggleClass("hotels-image-night hotels-image-day");
        $(".section-title").toggleClass("section-title-night");
        // Toggle Navbar font colour 
        $(".nav-link").toggleClass("white-font");
        $(".navbar-toggler").toggleClass("white-font");
        $(".navbar-toggler").toggleClass("white-border");
        // Navbar logo toggle (code learned on stackoverflow [https://stackoverflow.com/questions/19057513/toggling-an-image-src-with-jquery] )
        if($("#nav-logo").attr("src") === blackLogo){
            $("#nav-logo").attr("src", whiteLogo);
            }else {
                $("#nav-logo").attr("src", blackLogo)
            };
    }); 
});

// Weather API
var request = new XMLHttpRequest()

request.open('GET', 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=8KVKK772DZ7G34C7C4PNPX5LQ&dataElements=default&locations=Dublin%2CIE', true)

request.onload = function () {
  // Accessing JSON data
  var weatherData = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
    console.log("Success")
    for (var i = 0; i < 5;i++) {
        var forecast = weatherData.location.values[i];
        var epochDate = new Date(forecast.datetime); // code source: https://stackoverflow.com/questions/25445377/how-to-get-current-date-without-time
        var date =  epochDate.getDate()+"/"+(epochDate.getMonth()+1)+"/"+epochDate.getFullYear(); // converts epoch date to dd/mm/yyyy  // code source: https://stackoverflow.com/questions/25445377/how-to-get-current-date-without-time
        var dateElement = $(".date")[i];
        var iconElement = $(".w-icon")[i];
        var conditionsElement = $(".conditions")[i];
        var tempElement = $(".max-temp")[i]; 
        var precipElement = $(".precip")[i];

        $(dateElement).html(date); // Adds each date above forecast
        $(conditionsElement).html(forecast.conditions); // Adds daily forecasted conditions
        $(tempElement).html(forecast.maxt+"℃"); // Adds daily max temperature
        $(precipElement).html(forecast.precip+"mm"); // Adds daily precipitation level

        // Display weather icon depending on the current condition forecasted.
        if(forecast.conditions === "Rain"){
            $(iconElement).attr("src","assets/images/weather/rain.png");
        }else if((forecast.conditions === "Rain, Overcast")||(forecast.conditions === "Rain, Partially cloudy")) {
            $(iconElement).attr("src","assets/images/weather/rain.png");
        }
        else if( (forecast.conditions === "Partially cloudy")||(forecast.conditions === "Overcast")){
            $(iconElement).attr("src","assets/images/weather/cloudy.png");
        } else {
            $(iconElement).attr("src","assets/images/weather/sunny.png");
        }
  } 
} else{
console.log(error);
}
}
// Send request
request.send()

// Event API

var request = new XMLHttpRequest()

request.open("GET","https://app.ticketmaster.com/discovery/v2/events.json?countryCode=IE&apikey=DUV4bAYj0383DtTig69KAtWGmipVv1rt&geoPoint=gc7x&radius=20&sort=random" , true)

request.onload = function () {
  // Accessing JSON data
  var ticketMaster = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    console.log("Success");

    for (var i = 0; i < 6; i++) {
        var eventData = ticketMaster._embedded.events[i];
        var eventGallery;
        var eventTitle = $(".event-name")[i];
        var venue = $(".venue")[i];
        var eventDate = $(".event-date")[i];
        var eventImage;
        
        $(eventTitle).html(eventData.name);
        $(venue).html(eventData._embedded.venues[0].name);
        $(eventDate).html(eventData.dates.start.localDate);
        //for loop iterates through the first 6 images of an event and sets the first image with a width of 1000px or more.
         for (var j = 0; j < 6; j++) {
            var eventGallery = eventData.images[j];
            var eventImage = $(".event-image")[i];
            if(eventGallery.width > 1000){
                $(eventImage).attr("src", eventGallery.url);
                break;
            } else { // If there are no high quality images then the Dublin unlocked logo is displayed.
                $(eventImage).attr("src", "assets/images/site-logo.png");
            }
            } // end of for loop 
    }// end of for loop

  } else {
console.log(error);
};
}
// Send request
request.send()