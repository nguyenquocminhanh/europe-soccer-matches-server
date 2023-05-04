const router = require('express').Router();

const controller = require('../controllers/one-match');

router.get('/', controller.getOneMatch);

module.exports = router;