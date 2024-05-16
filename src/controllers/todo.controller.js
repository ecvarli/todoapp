const Todo = require('../models/todo.model')

const getTodos = async (req, res) => {
  // Get all todos
  try {
    // [{}, {}, {}]
    const response = await Todo.find()
    res.status(200).send(response)
  } catch (error) {
    console.log(`>>> error in fn:getTodos: `, error)
    throw new Error(error)
  }
}

const getTodo = async (req, res) => {
  // Get single todo
  try {

  } catch (error) {

  }
}

const createTodo = async (req, res) => {
  // Create a todo
  try {
    const { title } = req.body

    if (!title) {
      return res.status(401).send({ error: 'Title kısmı boş olamaz' })
    } else {
      const todo = await Todo.create(req.body)
      // const todo = new Todo(req.body)
      // todo.save()

      if (Object.keys(todo).length > 0) {
        return res.status(200).send({ message: 'Todo başarıyla oluşturuldu', todo })
      } else {
        return res.status(500).send({ message: 'Beklenmedik bir hata oluştu' })
      }
    }
  } catch (error) {
    console.log(`>>> error in fn:createTodo: `, error)
    throw new Error(error)
  }
}

const deleteTodo = async (req, res) => {
  // Delete a todo

}

const updateTodo = async (req, res) => {
  // Update a todo

}

module.exports = {
  getTodo,
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
}