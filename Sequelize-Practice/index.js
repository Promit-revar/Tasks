const express=require('express');
const app=express();
const router=require('./src/routes/routes');
//middlewares...
app.use(express.json());
app.use(router);

//server...
app.listen(8000,()=>console.log("Server running on 8000"));
