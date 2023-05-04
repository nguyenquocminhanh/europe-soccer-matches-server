const router = require('express').Router();

const controller = require('../controllers/one-team-info');

router.get('/', controller.getOneTeamInfo);

module.exports = router;