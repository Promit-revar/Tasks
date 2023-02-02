const db = require('../database/models');
const HttpError=require('../Errors/httpError');
exports.addTask=async(data)=>{
  const result=await db.Tasks.create({
    title:data.name,
    isComplete: false
  });
  return result;
};
exports.getTasks=async()=>{
  const result=await db.Tasks.findAll();
    
  return result;
};
exports.putTask=async(index,data)=>{
  const result=await db.Tasks.update(
    {
      title:data.title,
      isComplete:data.isCompleted
    },
        
    {where:{id:index}}
  );
  if(!result){
    throw new HttpError('Id Not Found');
  }
  return result;
};
exports.deleteTask=async()=>{
  const result=await db.Tasks.destroy({
    where:{isComplete:true}
  });
  return result;
};