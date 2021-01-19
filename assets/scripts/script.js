$( document ).ready(function() {
    // On click of the enter button it will hide splash page and show the main content.
    $("#enter-button").on("click", function() {
        $("#splash-page").hide();
        $("#main-content").css("display","block");
    }); 
    $("#time-button").on("click", function(){
        $("#home").toggleClass("home-image-night home-image-day");
        $("#time-button").toggleClass("day-button night-button");
        $("#button-text").text($("#button-text").text() == "Night" ? "Day":"Night");
    }); 
});