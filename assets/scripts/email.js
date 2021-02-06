function clear(){
          document.getElementById("fullname").value = "",
          document.getElementById("email").value = "",
          document.getElementById("comment").value = "";
} // code sourced from https://www.w3schools.com/howto/howto_html_clear_input.asp

function sendMail() {
    emailjs.send("gmail", "template_qm6hv6v", {
        "fullname": document.getElementById("fullname").value,
        "email": document.getElementById("email").value,
        "comment": document.getElementById("comment").value
    })
    .then(
        function(response) {
            console.log("Submission sent successfully", response);
            clear();
            $("#form-button").hide();
            $("form").append("<p>Submitted successfully.</p>");
        },
        function(error) {
            console.log("Submission failed to submit", error);
        }
    );
    return false;  // Blocks the page from refreshing on submit.
}



