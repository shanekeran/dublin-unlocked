// If the cookie is found, the user will bypass the splash page and continue to the main site
var cookie = Cookies.get("returning");
if(cookie){
    console.log("Splash page not displayed as 'returning' cookie was found.");
} else{
    console.log("Splash page displayed as no 'returning' cookie found.");
    $("#splash-page").css("display","block"); // Displays splash page
    $("#main-content").hide(); // Hides main content
}

// Sets the cookie with an expiration date of 30days
Cookies.set("returning", "true", {
    expires: 30
});

