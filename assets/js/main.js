// Menu mobile : ouvre / ferme la navigation.
const toggle = document.querySelector(".nav__toggle");
const list = document.querySelector(".nav__list");

toggle?.addEventListener("click", () => {
  const isOpen = list.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});
