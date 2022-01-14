class View {
  mostraEmail(resultadoValidaEmail) {
    if (resultadoValidaEmail == "e-mail válido") {
      $("#erro_email").css("display", "none");
    } else {
      $("#erro_email").css("display", "flex");
    }
  }
}
