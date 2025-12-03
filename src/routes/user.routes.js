const { Router } = require('express'); // desistruturei o "Router" de dentro do express
const UserController = require('../controllers/UserController');

const userRoutes = Router(); // executo o "Router" e passo para a const "userRoutes"

const userController = new UserController(); //estou criando uma nova "new" instancia da classe user controler, estou instanciando ela na memoria

userRoutes.post('/', userController.create); //como eu passo o "user" no routes, posso deixar so "/" aqui, mas se nao fosse isso, deveria manter "userRoutes.post('/user', (request, response)"


module.exports = userRoutes;
