const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open")

    const isopen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isopen?"ri-close-line": "ri-menu-line")
}) ;

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(" .about__container .section__header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(" .about__container .section__description", {
    ...scrollRevealOption,
    delay:500,
    interval:500,
});
ScrollReveal().reveal(" .about__container img", {
    ...scrollRevealOption,
    delay:1500,
});

ScrollReveal().reveal(" .service__container .section__header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(" .service__container .section__description", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(" .service__card", {
    duration: 1000,
    delay: 1000,
    interval: 500,
});

const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

const instagram = document.querySelector(".instagram__flex")

Array.from(instagram.children).forEach(item => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    instagram.appendChild(duplicateNode);
});