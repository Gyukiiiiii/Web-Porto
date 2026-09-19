
const body = document.body;
const themeBtn = document.getElementById('darklight');
const menuBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

function applyTheme(isLight) {
    body.classList.toggle('light-mode', isLight);
    themeBtn.textContent = isLight ? '🌙' : '☀️';
    themeBtn.setAttribute(
        'aria-label',
        isLight ? 'Switch to dark mode' : 'Switch to light mode'
    );
}

applyTheme(localStorage.getItem('theme') === 'light');

themeBtn.addEventListener('click', function () {
    const isLight = !body.classList.contains('light-mode');
    applyTheme(isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

function setMenu(isOpen) {
    navMenu.classList.toggle('is-open', isOpen);
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}

menuBtn.addEventListener('click', function () {
    setMenu(!navMenu.classList.contains('is-open'));
});

navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        setMenu(false);
    });
});

window.matchMedia('(min-width: 901px)').addEventListener('change', function (event) {
    if (event.matches) {
        setMenu(false);
    }
});