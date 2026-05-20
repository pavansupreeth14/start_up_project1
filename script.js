
// ======================================
// TYPING EFFECT (UNCHANGED)
// ======================================

const words = [
    "DevStack ",
    "Build Your Future ",
    "Internships "
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

    const current = words[wordIndex];

    if(deleting){
        typing.textContent = current.substring(0, charIndex--);
    } else {
        typing.textContent = current.substring(0, charIndex++);
    }

    let speed = deleting ? 50 : 120;

    if(!deleting && charIndex === current.length){
        deleting = true;
        speed = 1200;
    }
    else if(deleting && charIndex === 0){
        deleting = false;
        wordIndex++;
        if(wordIndex === words.length) wordIndex = 0;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ======================================
// 🔥 SCROLL POP-UP EFFECT (NO CSS REQUIRED)
// ======================================


// ======================================
// 🚀 PREMIUM SCROLL REVEAL (UP + DOWN SMOOTH)
// ======================================

const items = document.querySelectorAll(
    ".course-card, .feature-box, .about-container"
);

// apply base style using JS only
items.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(100px)";
    el.style.transition = "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
    el.style.willChange = "transform, opacity";
});

// scroll direction tracking
let lastScrollY = window.scrollY;

function animateScroll(){

    const trigger = window.innerHeight * 0.85;
    const currentY = window.scrollY;

    const scrollingDown = currentY > lastScrollY;

    items.forEach(el => {

        const top = el.getBoundingClientRect().top;

        // =========================
        // ENTER VIEW (SHOW)
        // =========================
        if(top < trigger){
            el.style.opacity = "1";
            el.style.transform = "translateY(0px)";
        }

        // =========================
        // EXIT VIEW (ONLY WHEN SCROLLING UP)
        // =========================
        if(top > window.innerHeight && !scrollingDown){
            el.style.opacity = "0";
            el.style.transform = "translateY(100px)";
        }
    });

    lastScrollY = currentY;
}

// smooth + optimized performance
window.addEventListener("scroll", () => {
    requestAnimationFrame(animateScroll);
});

window.addEventListener("load", animateScroll);


// ======================================
// MOUSE LIGHT EFFECT
// ======================================

const light = document.querySelector(".mouse-light");

document.addEventListener("mousemove", (e) => {
    if(light){
        light.style.left = e.clientX + "px";
        light.style.top = e.clientY + "px";
    }
});


// ======================================
// FEATURE HOVER EFFECT
// ======================================

document.querySelectorAll(".feature-box").forEach(box => {

    box.addEventListener("mouseenter", () => {
        box.style.transform = "translateY(-14px) scale(1.04)";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "translateY(0px) scale(1)";
    });

});


// ======================================
// MOBILE MENU
// ======================================


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ======================================
// PARTICLES EFFECT
// ======================================

document.addEventListener("mousemove", (e) => {

    const particle = document.createElement("div");

    particle.style.position = "fixed";
    particle.style.left = e.pageX + "px";
    particle.style.top = e.pageY + "px";
    particle.style.width = "8px";
    particle.style.height = "8px";
    particle.style.borderRadius = "50%";
    particle.style.background = "#60a5fa";
    particle.style.pointerEvents = "none";
    particle.style.opacity = "0.6";
    particle.style.transition = "0.6s linear";
    particle.style.zIndex = "9999";

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.style.opacity = "0";
        particle.style.transform = "scale(0)";
    }, 50);

    setTimeout(() => {
        particle.remove();
    }, 600);
  // =========================
// FAQ TOGGLE
// =========================

const faqBoxes =
document.querySelectorAll(".faq-box");


faqBoxes.forEach(box => {

    const button =
    box.querySelector(".faq-question");

    button.addEventListener("click", () => {

        box.classList.toggle("active");

    });

});
  

});