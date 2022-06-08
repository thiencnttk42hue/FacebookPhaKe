let settingsMenu = document.querySelector(".header-setting-menu");
let btnDark = document.getElementById("header-dark-btn");
let settingMenuToggle = function() {
    settingsMenu.classList.toggle("header-setting-menu-height")
}

btnDark.onclick = function() {
    btnDark.classList.toggle('header-dark-btn-on');
    document.body.classList.toggle('dark-theme');
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else
        localStorage.setItem("theme", "light");
}

if (localStorage.getItem("theme") == "light") {
    btnDark.classList.remove("header-dark-btn-on");
    document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
    btnDark.classList.add("header-dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}