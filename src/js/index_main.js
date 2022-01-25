$(".trocaTema").click(() => {
  const controller = new Controller();
  controller.confereTema();
});

$('.menuLink[href^="#sobre"]').on("click", function (e) {
  e.preventDefault();
  const id = $(this).attr("href"),
    targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset,
    },
    450
  );
});
