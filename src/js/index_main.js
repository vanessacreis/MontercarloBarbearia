const button = document.querySelector(".btn");
function menuResponsivo() {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("buttonHamburguer");
}
button.addEventListener("click", menuResponsivo);

const controller = new Controller();
$(".trocaTema").click(() => {
  controller.confereTema();
});
