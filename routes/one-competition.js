const router = require('express').Router();

const controller = require('../controllers/one-competition');

router.get('/', controller.getOneCompetition);

module.exports = router;