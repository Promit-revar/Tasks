const Joi=require('joi');
const postSchema= Joi.object({
  name: Joi.string()
    .min(1)
    .max(20)
    .required(),
    
  desc: Joi.string()
    .min(2)
    .max(100)
    .required()
});
const putSchema=Joi.object({
  title: Joi.string()
    .min(1)
    .max(20)
    .required(),
  isCompleted: Joi.boolean(),
  id: Joi.number()
});
exports.validateCreateTask=(req,res,next)=>{
  const{error,value}=postSchema.validate({name:req.body.name, desc:req.body.desc});
  if(error){
    res.json({error:error.message});
  }
  else{
    next();
  }
};
exports.validatePutTask=(req,res,next)=>{
  const{error,value}=putSchema.validate({title:req.body.title,isCompleted:req.body.isCompleted,id:req.params.id});
  if(error){
    res.json({error:error.message});
  }
  else{
    next();
  }
};