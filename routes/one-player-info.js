const router = require('express').Router();

const controller = require('../controllers/one-player-Info');

router.get('/', controller.getOnePlayerInfo);

module.exports = router;