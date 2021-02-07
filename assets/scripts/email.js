// Initialises emailjs
emailjs.init("user_JjDbjyafqspKbeOgfUbmT");
 //function to clear form input boxes       
function clear(){
        document.getElementById("fullname").value = "",
        document.getElementById("email").value = "",
        document.getElementById("comment").value = "";
} // code sourced from https://www.w3schools.com/howto/howto_html_clear_input.asp

// on click of the submit button
function sendMail() {
    emailjs.send("gmail", "template_qm6hv6v", { // the following values are sent via email
        "fullname": document.getElementById("fullname").value,
        "email": document.getElementById("email").value,
        "comment": document.getElementById("comment").value
    })
    .then(
        function(response) {
            console.log("Submission sent successfully", response);
            clear(); // input fields are cleared
            $("#form-button").hide(); // the submit button is hidden
            $("#submit-msg").html("Submitted successfully."); // submit message is displayed
        },
        function(error) {
            console.log("Submission failed to submit", error);
        }
    );
    return false;  // Blocks the page from refreshing on submit.
}



