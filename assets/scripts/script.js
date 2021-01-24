var blackLogo = "assets/images/nav-logo.png";
var whiteLogo = "assets/images/nav-logo-night.png"

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
        // Navbar logo toggle (code learned on stackoverflow [https://stackoverflow.com/questions/19057513/toggling-an-image-src-with-jquery] )
        if($("#nav-logo").attr("src") === blackLogo){
            $("#nav-logo").attr("src", whiteLogo);
            }else {
                $("#nav-logo").attr("src", blackLogo)
            };
    }); 
});