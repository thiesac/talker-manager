const talkerRoutes = require('express').Router();
const readFile = require('../readFile');

const HTTP_OK_STATUS = 200;
// const HTTP_BAD_REQUEST = 400;
const HTTP_NOT_FOUND = 404;

// requisito 1
talkerRoutes.get('/', async (req, res) => {
  const file = await readFile();
  res.status(HTTP_OK_STATUS).json(file);
});

// requisito 2
talkerRoutes.get('/:id', async (req, res) => {
  const { id } = req.params;
  const file = await readFile();
  const found = file.find((person) => person.id === Number(id));
  if (found) {
    return res.status(HTTP_OK_STATUS).json(found);
  }
  return res.status(HTTP_NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
});

module.exports = talkerRoutes;