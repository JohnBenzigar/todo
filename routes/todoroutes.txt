const express= require("express")

const router = express.Router()

//GET /todos ..//getting all todos
router.get('/todos',(req,res)=>{
res.json({mssg:"get all todos"})
})

//GET /todos ..//getting all todos
router.get('/todos/:id',(req,res)=>{
    res.json({mssg:"get all todos"})
    })
    
//POST  /todos ..//adding a new todo
router.post('/todos',(req,res)=>{
    res.json({mssg:"get all todos"})
    })

//PUT  /todos/:id ..//updating a todo with the matching id
router.put('/todos/:id',(req,res)=>{
    res.json({mssg:"get all todos"})
    })

//DELETE  /todos/:id ..//deleting a todo with matching id
router.delete('/todos/:id',(req,res)=>{
    res.json({mssg:"get all todos"})
    })


module.exports = router