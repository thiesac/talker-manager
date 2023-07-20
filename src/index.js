const express = require('express');
const readFile = require('./readFile');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// requisito 1
app.get('/talker', async (req, res) => {
  const file = await readFile();
  res.status(HTTP_OK_STATUS).json(file);
});

app.listen(PORT, () => {
  console.log('Online');
});