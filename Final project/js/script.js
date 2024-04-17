//Progress bar based on scroll of user
window.addEventListener('scroll', barScroll);
function barScroll() {
    var windowscrolled = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (windowscrolled / height) * 100;

    document.getElementById("progressbar").style.width = scrolled + "%";
}
// got this from https://www.devsamples.com/javascript/scroll-progress-bar

//Input field area color changing due to blur or focus events
if (window.location.pathname == "/Contact.html") {
    var nameField = document.getElementById("nameField")
    nameField.addEventListener("focus", function (event) {
        nameField.style.background = "azure"
    }, true)

    nameField.addEventListener("blur", function (event) {
        nameField.style.background = "white"
    }, true)


    var emailfield = document.getElementById("emailfield")
    emailfield.addEventListener("focus", function (event) {
        emailfield.style.background = "azure"
    }, true)

    var emailfield = document.getElementById("emailfield")
    emailfield.addEventListener("blur", function (event) {
        emailfield.style.background = "white"
    }, true)

    //Adding a message on the website itself that says thank you after pressing the submit button, not a alert
    var tyArea = document.getElementById("tyarea")
    var newDiv = document.createElement("div")
    var tymessage = document.createTextNode("Thank you for submitting")
    var submitbtn = document.getElementById("submit")

    submitbtn.onclick = function (tyforsubmit) {
        newDiv.appendChild(tymessage);
        tyArea.appendChild(tymessage);
    }
}
//Fullscreen function to the fullscreen button on top right of screen
var fullscreen = document.getElementById("fullscreen")
fullscreen.addEventListener("click", function (FS) {

    document.documentElement.requestFullscreen();

})



