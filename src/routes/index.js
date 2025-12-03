// eu posso reunir todas as rotas aqui, tornando mais limpo para importar quando for usar. por padrao, o arquivo "index" sempre e pego se apenas a pasta for indicada no import, entao isso facilita

const { Router } = require('express');

const userRouter = require('./user.routes');

const routes = Router();
routes.use("/user",userRouter) //quando alguem acessar user, e redirecionado para o "userRouter"

module.exports = routes