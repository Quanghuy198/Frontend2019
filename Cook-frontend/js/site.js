const header = document.querySelector("header")
window.onscroll = function(e){
    header.classList.toggle("sticky",window.scrollY>0);
}

const toggleMenu = header.querySelector(".menuToggle");
const navigationMenu = header.querySelector(".navigation")
toggleMenu.onclick = function(e){
    toggleMenu.classList.toggle("active")
    navigationMenu.classList.toggle("active")
}

const navigationMenuItems = navigationMenu.querySelectorAll("li");
for(let i=0; i<navigationMenuItems.length; i++){
    navigationMenuItems[i].onclick = function(e){
        toggleMenu.classList.toggle("active")
        navigationMenu.classList.toggle("active")
    }
}