class Model {
  constructor(email) {
    this.valor_input_email = email;
  }
  mudaTema() {
    const temaAtual = document.body.dataset.tema;
    const novoTema = temaAtual == "dark" ? "light" : "dark";
    document.body.setAttribute("data-tema", novoTema);
    return novoTema;
  }

  validaEmail() {
    if (
      this.valor_input_email.indexOf("@") > 0 &&
      this.valor_input_email.indexOf(".com") >
        this.valor_input_email.indexOf("@")
    ) {
      return "e-mail válido";
    } else {
      return "e-mail inválido";
    }
  }
}
