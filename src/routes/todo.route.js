const router = require('express').Router()
const { getTodo, createTodo, deleteTodo, getTodos, updateTodo } = require('../controllers/todo.controller')

router.get('/get-todo', getTodo)
router.get('/get-todos', getTodos)
router.post('/create-todo', createTodo)
router.delete('/delete-todo', deleteTodo)
router.put('/update-todo', updateTodo)

module.exports = router