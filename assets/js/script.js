"use strict";

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const hackerChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const numberOfCharacters = 600; // Number of floating characters
  const body = document.body;

  for (let i = 0; i < numberOfCharacters; i++) {
    let span = document.createElement("span");
    span.classList.add("hacker-text");
    span.textContent =
      hackerChars[Math.floor(Math.random() * hackerChars.length)];

    // Random position and animation delay
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = Math.random() * -100 + "vh"; // Start from above screen
    span.style.animationDuration = Math.random() * 3 + 2 + "s"; // Different speeds
    span.style.animationDelay = Math.random() * 2 + "s"; // Staggered effect

    body.appendChild(span);

    // Remove elements after they fall to keep performance smooth
    setTimeout(() => {
      body.removeChild(span);
    }, 5000);
  }

  // Repeat effect every second
  setInterval(() => {
    let span = document.createElement("span");
    span.classList.add("hacker-text");
    span.textContent =
      hackerChars[Math.floor(Math.random() * hackerChars.length)];

    span.style.left = Math.random() * 100 + "vw";
    span.style.top = Math.random() * -10 + "vh";
    span.style.animationDuration = Math.random() * 3 + 2 + "s";
    span.style.animationDelay = Math.random() * 2 + "s";

    body.appendChild(span);

    setTimeout(() => {
      body.removeChild(span);
    }, 5000);
  }, 200);
});
