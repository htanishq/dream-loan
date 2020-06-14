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


// carousel js
