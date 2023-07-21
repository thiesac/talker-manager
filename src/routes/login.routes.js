const loginRoutes = require('express').Router();
const crypto = require('crypto');
const allValidationsLogin = require('../middlewares/validateLogin');

const HTTP_OK_STATUS = 200;

// requisito 3
loginRoutes.post('/', allValidationsLogin, (req, res) => {
  const token = crypto.randomUUID().toString().substring(0, 16);
  res.status(HTTP_OK_STATUS).json({ token });
});

module.exports = loginRoutes;