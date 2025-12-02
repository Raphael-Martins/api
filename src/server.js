const express = require('express');

const app = express();

app.get('/messange/:id', (request, response) => {
  response.send(`estou em ${request.params.id}`);
});

const PORT = 3333;
app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));
