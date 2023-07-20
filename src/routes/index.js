const router = require('express').Router();
const loginRoutes = require('./login.routes');
const talkerRoutes = require('./talker.routes');

router.use('/talker', talkerRoutes);
router.use('/login', loginRoutes);

module.exports = router;