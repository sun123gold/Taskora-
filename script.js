const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelectorAll('.nav-links a, .nav-actions a');

if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navbar.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}
