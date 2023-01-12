const express= require("express")
const todoModel= require("../models/todomodel")
const router = express.Router()

function success(res, payload) {
    return res.status(200).json(payload)
  }
  
  router.get("/todos", async (req, res, next) => {
    try {
      const todo = await todoModel.find({})
      return success(res, todo)
    } catch (err) {
      next({ status: 400, message: "failed to get todos" })
    }
  })

  router.post("/todos", async (req, res, next) => {
    try {
      const todo = await todoModel.create(req.body)
      return success(res, todo)
    } catch (err) {
      next({ status: 400, message: "failed to create todo" })
    }
  })
  
  /*router.post("/todos", async (req, res) => {
    const {name,description} = req.body
    try {
      const todo = await todoModel.create({name,description})
      res.status(200).json(todo)
    } catch (error) {
      res.status(400).json({error:error.message}) }
    }
  )
  */
  
  router.put("/todos/:id", async (req, res, next) => {
    try {
      const todo = await todoModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
     
    } catch (err) {
      next({ status: 400, message: "failed to update todo" })
    }
  })
  router.delete("/todos/:id", async (req, res, next) => {
    try {
      await todoodel.findByIdAndRemove(req.params.id)
      return success(res, "todo deleted!")
    } catch (err) {
      next({ status: 400, message: "failed to delete todo" })
    }
  })
  

  module.exports = router