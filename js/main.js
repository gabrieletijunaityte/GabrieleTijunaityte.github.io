"use strict";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ once: true });

  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#nav-btn");
  const navBtnImg = document.querySelector("#nav-btn-img");
  const header = document.querySelector("#header");
  const hero = document.querySelector("#about");
  const goToTop = document.querySelector("#goToTop");

  // Hamburger menu toggle
  navBtn.onclick = () => {
    if (nav.classList.toggle("open")) {
      navBtnImg.src = "img/icons/close.svg";
    } else {
      navBtnImg.src = "img/icons/open.svg";
    }
  };

  // Close nav when any nav link is clicked (mobile)
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navBtnImg.src = "img/icons/open.svg";
    });
  });

  // Sticky header + go-to-top after scrolling past hero
  window.addEventListener("scroll", function () {
    const triggerHeight = hero ? hero.offsetHeight - 170 : 200;
    if (window.scrollY > triggerHeight) {
      header.classList.add("header-sticky");
      if (goToTop) goToTop.classList.add("reveal");
    } else {
      header.classList.remove("header-sticky");
      if (goToTop) goToTop.classList.remove("reveal");
    }
  });

  // Scroll-based active nav link highlighting
  const sections = document.querySelectorAll("section[id], div[id]");
  const navLinks = document.querySelectorAll("header nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((sec) => {
      const offset = sec.offsetTop - 200;
      if (window.scrollY >= offset) {
        current = sec.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
