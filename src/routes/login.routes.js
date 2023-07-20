const loginRoutes = require('express').Router();
const crypto = require('crypto');
const allValidationsLogin = require('../middlewares/validateLogin');

const HTTP_OK_STATUS = 200;
// const HTTP_BAD_REQUEST = 400;
// const HTTP_NOT_FOUND = 404;

// requisito 3
loginRoutes.post('/', allValidationsLogin, (req, res) => {
  const token = crypto.randomUUID().toString().substring(0, 16);
  res.status(HTTP_OK_STATUS).json({ token });
});

module.exports = loginRoutes;