const express = require('express');
const {validateCreateTask,validatePutTask,validateLogin,validateReq}=require('../middlewares/validate');
const { getTasks, createTask, editTasks, editTasksPatch, deleteCompletedTasks } = require('./controllers/taskController');
const router = express();
router.post('/login',validateLogin);
router.get('/',validateReq,getTasks);
router.post('/tasks/create',validateReq,validateCreateTask, createTask);
router.put('/tasks/:id',validateReq,validatePutTask, editTasks);
router.patch('/tasks/:id',validateReq,editTasksPatch);
router.delete('/tasks',validateReq,deleteCompletedTasks);
module.exports = router;