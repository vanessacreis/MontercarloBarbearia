class Controller {
  constructor(email) {
    this.valor_input_email = email;
  }
  confereTema() {
    const model = new Model();
    const novoTema = model.mudaTema();
  }

  validandoEmail() {
    let model = new Model(this.valor_input_email);
    let view = new View();
    view.mostraEmail(model.validaEmail());
  }
}
