// define html elements

var btn_menu = document.querySelector(".btn-menu");
// declaring variable for hiding navbar and login buttons
var navbar = document.querySelector(".navbar");
var loginbutton = document.querySelector(".login-button");
var toggle_menu =false;

// function menufunc(){
//     var window_height=0;
//     window_height = document.documentElement.clientWidth;
//     if(window_height > 600){
//         btn_menu.style.display = "none";
//         btn_close.style.display = "none";
//     }
//     else{
        
//         btn_menu.style.display = "inline-block";
//         btn_close.style.display = "none";
//     }
// }

// window.addEventListener("resize",menufunc);
// window.onload = menufunc;

btn_menu.addEventListener("click",showmenu);

function showmenu(){    
    if(!toggle_menu){        
        toggle_menu=true;
        navbar.style.display = "block";
        loginbutton.style.display = "block";
        // changing icons of menu
        btn_menu.innerHTML = "close";
    }
    else{
        toggle_menu=false;
        navbar.style.display = "none";
        loginbutton.style.display = "none";
        btn_menu.innerHTML = "menu";
    }
}
