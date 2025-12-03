const express = require('express'); // importa o express

const routes = require('./routes'); //por padrao, quando nao digo qual arquivo quero da pasta, ele carrega o "index", por isso mantenho o "index.js" dentro de "routes" com esse nome

const app = express(); // executa o express
app.use(express.json()); // indica ao express que ira receber os request no formato jason

app.use(routes); // quando a requisicao for enviada, do lado do cliente, ela caira aqui, e aqui o express "app" manda usar o "routes", que e meu "index.js" la dentro da pasta "routes", chegando la, ele vai ver qual e a rota solicitada, como "/user" por exemplo, e quando ele pegar a rota, vai redirecionar la, pro js que ta setado, no caso de "/user", seria "user.routes.js"

const PORT = 3333;
app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));

//notes para eu mesmo:
//https://enderecoDoSever.com (o ip do sever) /user/ (a rota solicitada, ou "recurso") 8 (parametro passado)
//parametro sao para dados simples, como o id de um produto
//https://enderecoDoSever.com/user/8

//com uso de query params
//https://enderecoDoSever.com (o ip do sever) /user/ (a rota solicitada, ou "recurso") ? (inciia query params) page=1 (o parametro e page, e ele recebe o valor de 1) & (adicionar mais query params) limit=2
//https://enderecoDoSever.com/user/?page=1&limit=2
