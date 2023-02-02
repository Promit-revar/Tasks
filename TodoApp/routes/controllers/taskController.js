

const service = require('../../services/taskServices');
exports.getTasks = async (req, res) => {
  const tasks = await service.getTasks();
  res.status(200).send({
    data: tasks
  });
};
exports.createTask = async (req, res) => {

  const data = req.body;
  const result = await service.addTask(data);
  res.status(201).send(result);

};
exports.editTasks = async (req, res) => {

  const index = parseInt(req.params.id);
  try{
    const result = await service.putTask(index, req.body);
  
    res.status(200).send({
      data: result
    });
  
  }
  catch(err){
    res.status(404).send({error:err.message()});
  }
};
exports.editTasksPatch = (req, res) => {
  //const data=req.body;
  // for(const [key,val] of Object.entries(data)){

  //     tasks[parseInt(req.params.id)][key]=val;
  // }
  //tasks[parseInt(req.params.id)]={...data};
  res.status(200).send({
    data: 'hello'//tasks[parseInt(req.params.id)]
  });
};
exports.deleteCompletedTasks = async (req, res) => {

  const result = await service.deleteTask();

  res.status(200).send({
    data: result
  });

};
