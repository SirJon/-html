var buttonWrite = document.querySelector(".button-write");
var pupup = document.querySelector(".pupup");
var buttonClose = document.querySelector(".popup-close");
var formPupup = pupup.querySelector("form");
var namePupup = pupup.querySelector("[name=user-name]");
var emailPupup = pupup.querySelector("[name=email]");
var textPupup = pupup.querySelector("[name=text]");
var storageName = localStorage.getItem("namePupup");
var storageEmail = localStorage.getItem("emailPupup");
var storageSupport = true;

var pupupMap = document.querySelector(".pupup-map");
var buttonCloseMap = document.querySelector(".popup-map-close");
var map = document.querySelector(".contacts-img img");

var user = document.querySelectorAll(".navigation-user li");
var userFooter = document.querySelectorAll(".footer-navigation-user li");

var btnSlider = document.querySelectorAll(".button-radio");
var slide = document.querySelectorAll(".slide");
var img = document.querySelectorAll(".advantages-nav-button img");

var btnSection = document.querySelectorAll(".button-delivery");
var section = document.querySelectorAll(".delivery-content-wrapper");

/*User navigation*/
user[0].addEventListener("click", function(evt) {
    evt.preventDefault();
    user[0].classList.add("visually-hidden");
    user[1].classList.remove("visually-hidden");
    user[2].classList.remove("visually-hidden");
    userFooter[0].classList.add("visually-hidden");
    userFooter[1].classList.remove("visually-hidden");
    userFooter[2].classList.remove("visually-hidden");
});

user[2].addEventListener("click", function(evt) {
    evt.preventDefault();
    user[0].classList.remove("visually-hidden");
    user[1].classList.add("visually-hidden");
    user[2].classList.add("visually-hidden");
    userFooter[0].classList.remove("visually-hidden");
    userFooter[1].classList.add("visually-hidden");
    userFooter[2].classList.add("visually-hidden");
});

userFooter[0].addEventListener("click", function(evt) {
    evt.preventDefault();
    user[0].classList.add("visually-hidden");
    user[1].classList.remove("visually-hidden");
    user[2].classList.remove("visually-hidden");
    userFooter[0].classList.add("visually-hidden");
    userFooter[1].classList.remove("visually-hidden");
    userFooter[2].classList.remove("visually-hidden");
});

userFooter[2].addEventListener("click", function(evt) {
    evt.preventDefault();
    user[0].classList.remove("visually-hidden");
    user[1].classList.add("visually-hidden");
    user[2].classList.add("visually-hidden");
    userFooter[0].classList.remove("visually-hidden");
    userFooter[1].classList.add("visually-hidden");
    userFooter[2].classList.add("visually-hidden");
});

/* Pupup */
try{
    storageName = localStorage.getItem("namePupup")
} catch{
    storageSupport = false;
}

try{
    storageEmail = localStorage.getItem("emailPupup")
} catch{
    storageSupport = false;
}

buttonWrite.addEventListener("click", function(evt) {
    evt.preventDefault();
    pupup.classList.add("js-show-pupup");
    pupupMap.classList.remove("js-show-pupup");
    namePupup.focus();

    if (storageName) {
        namePupup.value = storageName;
        emailPupup.focus();
        if (storageEmail) {
            emailPupup.value = storageEmail;
            textPupup.focus();
        }
    }
});

buttonClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    pupup.classList.remove("js-show-pupup");
    pupup.classList.remove("js-shake");
    namePupup.classList.remove("js-red");
    emailPupup.classList.remove("js-red");
});

formPupup.addEventListener("submit", function(evt) {
    if (!namePupup.value || !emailPupup.value){
        evt.preventDefault();
        pupup.classList.add("js-shake");
        namePupup.classList.add("js-red");
        emailPupup.classList.add("js-red");
    }else{
        if (storageSupport){
            localStorage.setItem("namePupup", namePupup.value);
            localStorage.setItem("emailPupup", emailPupup.value);
        }        
    }
});

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if(pupup.classList.contains("js-show-pupup")){
            pupup.classList.remove("js-show-pupup");
        }
    }
});

/* PupupMap */
map.addEventListener("click", function(evt) {
    evt.preventDefault();
    pupupMap.classList.add("js-show-pupup");
    pupup.classList.remove("js-show-pupup");
    pupup.classList.remove("js-shake");
    namePupup.classList.remove("js-red");
    emailPupup.classList.remove("js-red");
});

namePupup.addEventListener("focus", function() {
    namePupup.classList.remove("js-red");
});

emailPupup.addEventListener("focus", function() {
    emailPupup.classList.remove("js-red");
});

buttonCloseMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    pupupMap.classList.remove("js-show-pupup");
});

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if(pupupMap.classList.contains("js-show-pupup")){
            pupupMap.classList.remove("js-show-pupup");
        }
    }
});

/* Slider */

btnSlider[0].addEventListener("click", function(evt) {
    evt.preventDefault();
    slide[0].classList.add("js-show-flex");
    slide[1].classList.remove("js-show-flex");
    slide[2].classList.remove("js-show-flex");
    img[0].classList.add("visually-hidden");
    img[1].classList.remove("visually-hidden");
    img[2].classList.remove("visually-hidden");
    img[3].classList.add("visually-hidden");
    img[4].classList.remove("visually-hidden");
    img[5].classList.add("visually-hidden");
});

btnSlider[1].addEventListener("click", function(evt) {
    evt.preventDefault();
    slide[1].classList.add("js-show-flex");
    slide[0].classList.remove("js-show-flex");
    slide[2].classList.remove("js-show-flex");
    img[0].classList.remove("visually-hidden");
    img[1].classList.add("visually-hidden");
    img[2].classList.add("visually-hidden");
    img[3].classList.remove("visually-hidden");
    img[4].classList.remove("visually-hidden");
    img[5].classList.add("visually-hidden");
});

btnSlider[2].addEventListener("click", function(evt) {
    evt.preventDefault();
    slide[2].classList.add("js-show-flex");
    slide[0].classList.remove("js-show-flex");
    slide[1].classList.remove("js-show-flex");
    img[0].classList.remove("visually-hidden");
    img[1].classList.add("visually-hidden");
    img[2].classList.remove("visually-hidden");
    img[3].classList.add("visually-hidden");
    img[4].classList.add("visually-hidden");
    img[5].classList.remove("visually-hidden");
});

/* Slider 2*/

btnSection[0].addEventListener("click", function(evt) {
    evt.preventDefault();
    section[0].classList.add("js-show-flex");
    section[1].classList.remove("js-show-flex");
    section[2].classList.remove("js-show-flex");
    btnSection[0].classList.add("js-button-delivery");
    btnSection[0].classList.remove("buttton-hover");
    btnSection[1].classList.remove("js-button-delivery");
    btnSection[2].classList.remove("js-button-delivery");
});

btnSection[1].addEventListener("click", function(evt) {
    evt.preventDefault();
    section[1].classList.add("js-show-flex");
    section[0].classList.remove("js-show-flex");
    section[2].classList.remove("js-show-flex");
    btnSection[1].classList.add("js-button-delivery");
    btnSection[1].classList.remove("buttton-hover");
    btnSection[0].classList.remove("js-button-delivery");
    btnSection[2].classList.remove("js-button-delivery");
});

btnSection[2].addEventListener("click", function(evt) {
    evt.preventDefault();
    section[2].classList.add("js-show-flex");
    section[0].classList.remove("js-show-flex");
    section[1].classList.remove("js-show-flex");
    btnSection[2].classList.add("js-button-delivery");
    btnSection[2].classList.remove("buttton-hover");
    btnSection[0].classList.remove("js-button-delivery");
    btnSection[1].classList.remove("js-button-delivery");
});
