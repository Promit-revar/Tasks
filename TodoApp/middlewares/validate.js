const Joi=require('joi');
const axios = require('axios');
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
exports.validateLogin=async(req,res,next)=>{
    const response = await axios.post("http://localhost:3000/login",req.body);
    if(response.data.success){
      req.headers.authorization=response.data.token;
      res.status(200).json({sucess:"Login sucessfull"});
    }
    else{
      res.status(401).json({error:"Invalid credentials"});
    }
};
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
exports.validateReq=async(req,res,next)=>{
  
  try{
  const validation = await axios.get("http://localhost:3000/verify",{headers:{authorization:req.headers.authorization}});
  
  
  
  if(validation.data.success){
    next();
  }
  else{
    res.status(401).json({error:validation.data});
  }
}
catch(err){
  res.status(500).json({error:err.message})
}

};