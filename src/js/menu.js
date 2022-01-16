const menuHamburguer = document.querySelector(".hamburguer");
const menuLista = document.querySelector(".menuLista");

menuHamburguer.addEventListener("click", () => {
  menuHamburguer.classList.toggle("ativo");
  menuLista.classList.toggle("ativo");
});

const menuLink = document.querySelectorAll(".menuLink");

menuLink.forEach((link) =>
  link.addEventListener("click", () => {
    menuHamburguer.classList.remove("ativo");
    menuLista.classList.remove("ativo");
  })
);
