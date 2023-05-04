const router = require('express').Router();

const controller = require('../controllers/all-match');

router.get('/', controller.getAllMatches);

module.exports = router;