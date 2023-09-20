/*
    Student Name: TG Akoi
    File Name: script.js
    Date: 09/2023
*/

//Global variables 
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display == "block" && logo.style.display === "none") {
        name.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

//Function to display the burpees example video
Function burpees() {
    videoSource.src = "media/burpees.mp4";
    descriptionSource.src = "media/burpees-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display the plank example video
Function plank() {
    videoSource.src = "media/plank.mp4";
    descriptionSource.src = "media/plank-description.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display to the mountain climbers example video
Function mountain() {
    videoSource.src = "media/mc.mp4";
    descriptionSource.src = "media/mountain-description.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display a promo code
function discounts() {
    var promo = document.getElementById("speacial");
    promo.firstChild.nodeValue = "Promo Code: D25Start";
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em";
}