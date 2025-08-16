const express = require('express');
const { signup, login } = require('../controllers/authController');
const { body } = require('express-validator');

const router = express.Router();

router.post('/signup', [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')

], signup);

router.post('/login', [
  body('email').isEmail(),
  body('password').notEmpty()
], login);

module.exports = router;