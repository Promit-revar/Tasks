const express=require('express');
const {getTasks,createTask,editTasks,editTasksPatch,deleteCompletedTasks} = require('./controllers/taskController');
const router=express();
router.get("/",getTasks);
router.post('/tasks/create',createTask);
router.put('/tasks/:id',editTasks);
router.patch('/tasks/:id',editTasksPatch);
router.delete('/tasks',deleteCompletedTasks);
module.exports=router;