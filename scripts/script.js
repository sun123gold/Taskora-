(() => {
  const menuToggle = document.querySelector("#menu-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");
  const menuIconPath = document.querySelector("#menu-icon path");
  const currentYear = document.querySelector("#current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // The script can also be reused on pages without this navigation.
  if (!menuToggle || !mobileMenu) {
    return;
  }

  const desktopBreakpoint = window.matchMedia("(min-width: 1024px)");

  function setMenuOpen(isOpen) {
    mobileMenu.classList.toggle("hidden", !isOpen);
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    if (menuIconPath) {
      menuIconPath.setAttribute(
        "d",
        isOpen ? "M6 18 18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
      );
    }
  }

  function toggleMenu() {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  }

  menuToggle.addEventListener("click", toggleMenu);

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (
      menuToggle.getAttribute("aria-expanded") === "true" &&
      !mobileMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuToggle.getAttribute("aria-expanded") === "true"
    ) {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  // Always restore the desktop layout cleanly when crossing the breakpoint.
  desktopBreakpoint.addEventListener("change", (event) => {
    if (event.matches) {
      setMenuOpen(false);
    }
  });
})();
