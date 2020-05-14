// navbar scrolling color change

function navscroll() {
    const navbarcolor = document.querySelector('.navbar');
    if (window.scrollY > 400) {
        navbarcolor.classList.add('active');
    }
    else {
        navbarcolor.classList.remove('active');
    }
}
window.addEventListener("scroll", navscroll);