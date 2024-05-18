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
    const { title } = req.query

    if(!title) {
      return res.status(401).send({ error: "Title boş olamaz!!!" })
    } else {
      const todo = await Todo.findOne({title})

      if (todo) {
        return res.status(200).send(todo)
      } else {
        return res.status(404).send ({ error: "Böyle bir collection yok!!!"})
      }
    }
  } catch (error) {
    console.log(">>> error in fn:getTodo: ", error)
    throw new Error(error)
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
  try {
    const { title } = req.query

    if(!title) {
      return res.status(401).send({ error: "Title kısmı boş olamaz!!!" })
    }else {
      const result = await Todo.findOneAndDelete({title})

      if(result) {
        return res.status(200).send({ message: "Collection başarıyla silindi", result })
      } else {
        return res.status(500).send({error: "Collection bulunamadı!!!"})
      }
    }
  } catch (error) {
    console.log(">>> error in fn:deleteTodo ", error)
    throw new Error(error)
  }

}

const updateTodo = async (req, res) => {
  // Update a todo
  try {
    const {id , ...updatedTodo } = req.query
    if (!id) {
      return res.status(401).send ({ error: "Geçerli bir id girin!!! "})
    } if(!updatedTodo || Object.keys(updatedTodo) === 0) {
      return res.status(401).send ({ error: "Güncellenecek verilerini girin!!! "})
    }
    const update = await Todo.findByIdAndUpdate(id, updatedTodo, {new: true})

    if (update) {
      return res.status(200).send({ message: "Collection başarıyla güncellendi", update})
    } else {
      return res.status(404).send({ error: "Collection bulunamadı"})
    }
  } catch (error) {
    console.losg(">>> error in fn:updateTodo ", error)
    throw new Error(error)
  }
}

module.exports = {
  getTodo,
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
}