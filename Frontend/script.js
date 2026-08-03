document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("theme-toggle");

    if (!button) return;

    // initialize from saved preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        button.innerHTML = "☀️";
    } else {
        button.innerHTML = "🌙";
    }

    button.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            button.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            button.innerHTML = "🌙";
        }

    });

});

/* ================= SMOOTH SCROLL ================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if(targetSection){

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

/* ================= NAVBAR SCROLL ================= */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 20){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});