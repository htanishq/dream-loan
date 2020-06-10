var navbar = document.querySelector(".navbar");

var menuClick = document.querySelector(".menuClick");

var togglemenu = false;

function showMenu(){
    if(!togglemenu){
        navbar.classList.add("active");
        menuClick.innerHTML="close";
        togglemenu = true
    }
    else{
        menuClick.innerHTML="menu";
        navbar.classList.remove("active");
        togglemenu = false
    }
}

menuClick.addEventListener("click",showMenu);