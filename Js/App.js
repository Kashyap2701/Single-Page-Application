import home from "./Home.js";
import about from "./About.js";
import images from "./Images.js";
import services from "./Services.js";

// routes for different module data
let routes = {
   '/':home,
   '/about': about,
   '/images' : images,
   '/services' : services
}

let mainContainer = document.getElementById('show-content');
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((navlink)=>{
    navlink.addEventListener('click',(e)=>{
        // not reload when we click
        e.preventDefault();

        history.pushState(routes[window.location.pathname],null,navlink.href);
        mainContainer.innerHTML = routes[window.location.pathname];
    })
})

// it will render home component first 
mainContainer.innerHTML = home;
