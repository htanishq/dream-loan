// navigation menu
var navbar = document.querySelector(".navbar");

var menuOpen = document.querySelector(".menuOpen");

var menuClose = document.querySelector(".closemenu");

var togglemenu = false;

function openMenu(){
    navbar.classList.add("active");
    // menuClick.innerHTML="close";
    togglemenu = true
    // if(!togglemenu){
        
    // }
    // else{
        
    // }
}

function closeMenu(){
    // menuClick.innerHTML="menu";
    navbar.classList.remove("active");
    togglemenu = false
}
console.log(togglemenu);
menuOpen.addEventListener("click",openMenu);
menuClose.addEventListener("click",closeMenu);

// inner nav show and hide on click

var product_menu = document.querySelector(".product-menu");

product_menu.addEventListener("onmouseup",show_nav);

function show_nav(){
    var inner_nav = document.querySelector(".inner-nav");
    inner_nav.style.display="block !important";
}

// carousel js


var slide = {
    slidesToShow: 1,
    draggable: true,
    duration: 0.4,
    scrolllock: true,
    dragVelocity: 2.45
};

new Glider(document.querySelector('.carousel'),slide);

new Glider(document.querySelector('.rating__slider'),slide);

/************************************************************************/ 

var signupModal= document.getElementsByClassName("signup")[0]; // open  sign up modal
var signinModal = document.getElementsByClassName("signin")[0]; // open sign in modal

function showlogin(signVal){
    signVal.classList.add("modal-active");
}

function hidelogin(){
    document.getElementsByClassName("modal-bg")[0].classList.remove("modal-active");
    document.getElementsByClassName("modal-bg")[1].classList.remove("modal-active");
}

document.getElementById("getlogin").addEventListener("click",function(){
    showlogin(signupModal);
});

document.getElementById("getregister").addEventListener("click",function(){
    showlogin(signinModal);
})
document.getElementsByClassName("closeLogin")[0].addEventListener("click",hidelogin);
document.getElementsByClassName("closeLogin")[1].addEventListener("click", hidelogin);