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


/* ================= CURSOR GLOW ================= */

const glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove",(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animateGlow(){

    currentX += (mouseX-currentX)*0.12;
    currentY += (mouseY-currentY)*0.12;

    glow.style.left = currentX + "px";
    glow.style.top = currentY + "px";

    requestAnimationFrame(animateGlow);

}

animateGlow();

const hoverItems = document.querySelectorAll(
"a, button, .btn, .project-card, .skill-card"
);

hoverItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        glow.style.width="300px";
        glow.style.height="300px";

    });

    item.addEventListener("mouseleave",()=>{

        glow.style.width="220px";
        glow.style.height="220px";

    });

});


/* ================= COUNTER ================= */

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 60;

            const update = ()=>{

                count += speed;

                if(count < target){

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            }

            update();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter=>observer.observe(counter));


/* ================= MAGNETIC BUTTON ================= */

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect=button.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const moveX=(x-rect.width/2)/8;

        const moveY=(y-rect.height/2)/8;

        button.style.transform=
        `translate(${moveX}px,${moveY}px)`;

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translate(0,0)";
    });

});


/* ================= SCROLL PROGRESS ================= */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const scrollTop = document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight
    -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop/height)*100;

    progressBar.style.width = progress+"%";

});


