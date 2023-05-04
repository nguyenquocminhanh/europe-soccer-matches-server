const router = require('express').Router();

const controller = require('../controllers/one-player-matches');

router.get('/', controller.getOnePlayerMatches);

module.exports = router;