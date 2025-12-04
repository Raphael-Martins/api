const AppError = require("../utils/AppError")

class UserController {
  create( request, response) {
    const { name, email, password } = request.body; // desestruturando os dados de dentro do corpo do request


    if(!name) {
      throw new AppError("nome e obrigatorio")
    }

    response.status(201).json({ name, email, password }); // respondendo como um objeto tambem em jason, aproveitandoe ja enviando o status code . no caso usei de create
  }
}

module.exports = UserController;

//notes
/**
 um controler pode ter ate 5 metodos, nao mais que isso, se for nescessario mais, fazer outro controller separado (nao e um regra de sintaxe, e uma boa pratica), os metodos sao:
 * index    - utiliza GET para listar varios registros
 * show     - utiliza GET para exibir um registro especifico
 * create   - utiliza POST para criar um registro
 * update   - utiliza PUT para atualizar um registro
 * delete   - Utiliza DELETE para remover um registro
 */
