const express = require('express');
const homePingController = require('../../controllers/home.controller');
const todoRouter = require('./todo.routes');

const router = express.Router();
//make sure you write apis name correct.
router.use('/todos', todoRouter);// /todos

router.get('/ping',  homePingController);// /ping.

module.exports = router;