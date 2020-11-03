// JavaScript Document

//variabelen
var hamburgermenu = document.querySelector(".uitklap");
var menuButton = document.querySelector("header button");
var header = document.querySelector("header");


//als er op de knop gelikt wordt opent de functie hamburgeropenen
menuButton.addEventListener("click", HamburgerOpenen);
menuButton.addEventListener("click", veranderSpan);

function veranderSpan() {
    menuButton.classList.toggle('menu');
}

function HamburgerOpenen() {


    //als de hamburger menu display none heeft wordt het een block of andersom
    if (hamburgermenu.style.display === "block") {
        
        hamburgermenu.style.display = "none";
        
    } else {
        
        hamburgermenu.style.display = "block";
    }
};

