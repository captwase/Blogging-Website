
let toggle_button = document.querySelector("nav .toggle-button");
let header_variable = document.querySelector(".header-area");

toggle_button.onclick = function(e){
    header_variable.classList.toggle('nav-collapse');
}