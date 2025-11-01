const express = require('express');
const homePingController = require('./controllers/home.controller');

const router = express.Router();

router.get('/custom', homePingController);
router.get('/custom2', homePingController);

module.exports = router;
