class Controller {
    confereTema() {
      const model = new Model();
      const novoTema = model.mudaTema();
  
      const view = new View();
      view.trocaCorItens(novoTema);
    }
  }