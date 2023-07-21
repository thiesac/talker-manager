const talkerRoutes = require('express').Router();
const fs = require('fs').promises;
const path = require('path');
const { allValidationsTalker, validateToken } = require('../middlewares/validateTalker');
const readFile = require('../readFile');

const talkerPath = path.resolve(__dirname, '../talker.json');

const HTTP_OK_STATUS = 200;
const HTTP_CREATED = 201;
// const HTTP_BAD_REQUEST = 400;
const HTTP_NOT_FOUND = 404;

// requisito 1
talkerRoutes.get('/', async (req, res) => {
  const file = await readFile();
  res.status(HTTP_OK_STATUS).json(file);
});

// requisito 5
async function findLastID() {
  try {
    const talkers = await readFile();

    if (talkers.length === 0) {
      return 1;
    }

    const maxID = talkers.reduce((max, talker) => Math.max(max, talker.id), 0);

    return maxID + 1;
  } catch (error) {
    console.error('Error finding the last ID:', error);
    throw error;
  }
}

talkerRoutes.post('/', allValidationsTalker, validateToken, async (req, res) => {
  const { name, age, talk } = req.body;
  const previousTalkersList = await readFile();

  const addNewTalker = {
    id: await findLastID(),
    name,
    age,
    talk,
  };

  previousTalkersList.push(addNewTalker);
  await fs.writeFile(talkerPath, JSON.stringify(previousTalkersList));
  res.status(HTTP_CREATED).json(addNewTalker);
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