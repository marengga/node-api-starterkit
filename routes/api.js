const express = require('express');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);

const authMiddleware = require('../middlewares/auth');
const authController = require('../controllers/auth');
const taskController = require('../controllers/task');
const userController = require('../controllers/systemuser');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/task', authMiddleware.checkAuth, taskController.getTasks);
router.get('/task/:id', authMiddleware.checkAuth, taskController.getTask);
router.post('/task', authMiddleware.checkAuth, taskController.addTask);
router.get('/usertask', authMiddleware.checkAuth, userController.getUsersWithTasks);

module.exports = router;