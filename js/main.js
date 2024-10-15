const toggle = document.querySelector("#toggle")
const navmenu = document.querySelector(".navmenu")
toggle.onclick = function () {
    toggle.querySelector('i').classList.toggle('fa-xmark')
    navmenu.classList.toggle('active')
}

const dropdown = document.querySelector(".dropdown")
const dropdownMenu = document.querySelector(".dropdown-menu")
dropdown.onmouseover = function () {
    dropdownMenu.classList.toggle('active')
}

const nav = document.querySelector("nav")
window.onscroll = function () {
    if (window.scrollY >= 150) {
        nav.classList.add('nav-bg')
    } else {
        nav.classList.remove('nav-bg')
    }
}