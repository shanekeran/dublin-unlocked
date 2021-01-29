// Sets the cookie with an expiration date of 30days
Cookies.set("returning", "true", {expires: 30});

// If the cookie is found, the user will bypass the splash page and continue to the main site
var cookie = Cookies.get("returning");
if(cookie){
    $("#splash-page").hide();
    $("#main-content").css("display","block");
} else{
    console.log("Splash page displayed as no 'returning' cookie found.")
}
