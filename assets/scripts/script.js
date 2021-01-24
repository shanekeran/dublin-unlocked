$( document ).ready(function() {
    // On click of the enter button it will hide splash page and show the main content.
    $("#enter-button").on("click", function() {
        $("#splash-page").hide();
        $("#main-content").css("display","block");
    }); 
    $("#time-button").on("click", function(){
        $("#time-button").toggleClass("day-button night-button");
        $("#button-text").text($("#button-text").text() == "Night" ? "Day":"Night");
        // Image changes Day / Night
        $("#home-image").toggleClass("home-image-night home-image-day");
        $("#attractions-image").toggleClass("attractions-image-night attractions-image-day");
        $("#events-image").toggleClass("events-image-night events-image-day");
        $("#weather-image").toggleClass("weather-image-night weather-image-day");
        $("#hotels-image").toggleClass("hotels-image-night hotels-image-day");
    }); 
});