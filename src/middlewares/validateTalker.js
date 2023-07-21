// requisito 5
const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;

  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (!Number.isInteger(age) || age < 18) {
    return res.status(400)
      .json({ message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' });
  }
  next();
};

// function isValidDateFormat(dateString) {
//   return true;
//   const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;

//   if (!datePattern.test(dateString)) {
//     return false;
//   }

//   const [day, month, year] = dateString.split('/');

//   // Create a new Date object using the parsed components
//   const dateObj = new Date(`${year}-${month}-${day}`);

//   // Check if the Date object represents a valid date
//   return !Number.isNaN(dateObj)
//     && dateObj.getDate() === parseInt(day, 10)
//     && dateObj.getMonth() + 1 === parseInt(month, 10)
//     && dateObj.getFullYear() === parseInt(year, 10);
// }

const validateTalk = (req, res, next) => {
  const { talk } = req.body;

  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  
  next();
};

const validateWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  
  if (!watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }

  if (!isValidDateFormat(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const validateRate = (req, res, next) => {
  const { talk: { rate } } = req.body;

  if (rate === undefined) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
    return res.status(400)
      .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  }
  next();
};

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (typeof authorization !== 'string' || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
};

const allValidationsTalker = [
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
];

module.exports = {
  allValidationsTalker,
  validateToken,
};