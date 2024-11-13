let btnChange1 = document.getElementById("btnChange1");
let btnChange2 = document.getElementById("btnChange2");
let btnChange3 = document.getElementById("btnChange3");
let btnChange4 = document.getElementById("btnChange4");
let btnChange5 = document.getElementById("btnChange5");
let btnChange6 = document.getElementById("btnChange6");
let btnChange7 = document.getElementById("btnChange7");
let btnChange8 = document.getElementById("btnChange8");
let btnChange9 = document.getElementById("btnChange9");
let btnChange10 = document.getElementById("btnChange10");

let affectMe1 = document.getElementById("affectMe1");
let affectMe2 = document.getElementById("affectMe2");
let affectMe3 = document.getElementById("affectMe3");
let affectMe4 = document.getElementById("affectMe4");
let affectMe5 = document.getElementById("affectMe5");
let affectMe6 = document.getElementById("affectMe6");
let affectMe7 = document.getElementById("affectMe7");
let affectMe8 = document.getElementById("affectMe8");
let affectMe9 = document.getElementById("affectMe9");
let affectMe10 = document.getElementById("affectMe10");


btnChange1.addEventListener("click", function(event){
    affectMe1.innerText = "fadeIn";
    affectMe1.classList = "fadeIn";
});
btnChange2.addEventListener("click", function(event){
    // affectMe2.innerText = "barrelRoll";
    affectMe2.classList = "barrelRoll";
});
btnChange3.addEventListener("click", function(event){
    affectMe3.innerText = "rollerRight";
    affectMe3.classList = "rollerRight";
});
btnChange4.addEventListener("click", function(event){
    affectMe4.innerText = "rollerLeft";
    affectMe4.classList = "rollerLeft";
});
btnChange5.addEventListener("click", function(event){
    affectMe5.innerText = "zoomer";
    affectMe5.classList = "zoomer";
});
btnChange6.addEventListener("click", function(event){
    affectMe6.innerText = "shake";
    affectMe6.classList = "shake";
});
btnChange7.addEventListener("click", function(event){
    // affectMe7.innerText = "slideRight";
    affectMe7.classList = "slideRight";
});
btnChange8.addEventListener("click", function(event){
    affectMe8.innerText = "slideLeft";
    affectMe8.classList = "slideLeft";
});
btnChange9.addEventListener("click", function(event){
    affectMe9.innerText = "rotateIn";
    affectMe9.classList = "rotateIn";
});
btnChange10.addEventListener("click", function(event){
    affectMe10.innerText = "bounceIn";
    affectMe10.classList = "bounceIn";
});