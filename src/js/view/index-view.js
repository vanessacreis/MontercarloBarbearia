class View {
  trocaCorItens(tema) {
    console.log(tema);
    $("#logo").attr("src", `./src/img/logo${tema}.svg`);
    //   $(".logo").attr("src", `/src/img/icons/logo-${tema}.svg`);
    //   $(".coracaoFilosofia").attr("src", `/src/img/coracao-${tema}.svg`);
  }
}
