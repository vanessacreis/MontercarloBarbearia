class View {
  trocaCorItens(tema) {
    console.log(tema);
    $(".loupe").attr("src", `../img/loupe-${tema}.png`);
    $(".icon_sacola").attr("src", `../img/shopping-${tema}.png`);
  }
}
