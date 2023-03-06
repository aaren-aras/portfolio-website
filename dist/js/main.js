// querySelector() searches and returns 1st HTML element that matches given CSS selector within doc (index.html)
// wrapper <div>
const menuBtn = document.querySelector(".menu-btn");
// <span> inside the above wrapper div
const hamburger = document.querySelector(".menu-btn__burger");
// <nav>
const nav = document.querySelector(".nav");
// <ul> inside above <nav>
const menuNav = document.querySelector(".menu-nav");
// returns all the <a>s inside <ul> as array
const navItemes = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    // classList() returns CSS classes of an HTML element ("hamburger") (read-only)
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    // loops through items, and pulls one out each time
    navItemes.forEach(item => item.classList.add('open'))

    showMenu = true;
  } else {
    // shortcut: ctrl+d to select multiple of the same and edit all of em
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItemes.forEach(item => item.classList.remove('open'))

    showMenu = false;
  }
}
