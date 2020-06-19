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