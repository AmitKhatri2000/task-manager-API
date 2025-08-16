const express = require('express');
const {
  createTask, getTasks, getTaskById, updateTask, deleteTask
} = require('../controllers/taskController');
const auth = require('../middleware/authMiddleware');
const { body } = require('express-validator');

const router = express.Router();

router.use(auth);

router.post('/', [
  body('title').isLength({ min: 3 })
], createTask);

router.get('/', getTasks);
router.get('/:id', getTaskById);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;