class View {
  trocaCorItens(tema) {
    console.log(tema);
    $(".losango").attr("src", `./src/img/losango-${tema}.svg`);
  }
}
