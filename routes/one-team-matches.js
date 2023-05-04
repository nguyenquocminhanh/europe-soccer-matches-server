const router = require('express').Router();

const controller = require('../controllers/one-team-matches');

router.get('/', controller.getOneTeamMatches);

module.exports = router;