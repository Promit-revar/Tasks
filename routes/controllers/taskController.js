let tasks=[];
exports.getTasks=(req,res)=>{

    res.status(200).send({
        data:tasks
    });
}
exports.createTask=(req,res)=>{

    let data=req.body;
    data.isCompleted=false;
    tasks.push(data);
    res.status(201).send(data);

}
exports.editTasks=(req,res)=>{
   
    let index=parseInt(req.params.id);
    tasks[index]=req.body;
    res.status(200).send({
        data:tasks[index]
    });
}
exports.editTasksPatch=(req,res)=>{
    let data=req.body;
    for(const [key,val] of Object.entries(data)){
        
        tasks[parseInt(req.params.id)][key]=val;
    }
    res.status(200).send({
        data:tasks[parseInt(req.params.id)]
    });
}
exports.deleteCompletedTasks=(req,res)=>{
    tasks=tasks.filter((task)=>task.isCompleted===false);
    
    res.status(200).send({
        data:tasks
    });
}
