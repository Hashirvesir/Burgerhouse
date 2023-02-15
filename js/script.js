let nav = document.querySelector("nav")

window.addEventListener("scroll",function() {
    
    if (window.pageYOffset >100) {
        nav.classList.add('nav-color',"show")
        
    } else {
        nav.classList.remove('nav-color',"show")

    }
});

