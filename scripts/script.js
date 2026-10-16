const navbar = document.querySelector('.navbar');
const navPanel = document.querySelector('.nav-panel');
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navItems = document.querySelectorAll('.nav-panel a');

if (menuToggle && navbar && navPanel) {
    const closeMenu = () => {
        navbar.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
    };

    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = navbar.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navItems.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target)) {
            closeMenu();
        }
    });
}
