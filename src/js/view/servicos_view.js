class View {
  trocaCorItens(tema) {
    console.log(tema);
    $(".loupe").attr("src", `../img/loupe-${tema}.png`); //mudar depois
    $(".icon_sacola").attr("src", `../img/shopping-${tema}.png`); //mudar depois
  }
}
