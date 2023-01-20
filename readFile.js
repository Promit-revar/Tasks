
const fs=require('fs');
function readFileCustom(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,data)=>{
        if(err){
            reject(err);
        }
        else if(fileName=='./Question2/Answers.txt'){
            reject("wrong file!");
        }
        resolve(data);
    });
});
}

const files=['./Question1/Answers.txt','./Question2/Answers.txt','./Question3/Answers.txt']
readFileCustom(files[0])
.then((data)=>{
    console.log(data.toString());
    return readFileCustom(files[1]);
})
.catch(err=>{
    console.log(err);
}) 
.then((data)=>{

        console.log(data);
        return readFileCustom(files[2])
        
})
.then((data)=>{
            console.log(data.toString());
            
})

    
//console.log(pr.then(data=>console.log(data.toString())))

// fs.readFile('./Question1/Answers.txt',(err,data)=>{
//             if(err) console.error(err);
//             //console.log(file);
//             console.log(data.toString());
//             fs.readFile('./Question1/testcases.txt',(err,data)=>{
//                 if(err) console.error(err);
//                 //console.log(file);
//                 console.log(data.toString());
//                 fs.readFile('./Question2/Answers.txt',(err,data)=>{
//                     if(err) console.error(err);
//                     //console.log(file);
//                     console.log(data.toString());
                    
//         })
                
//     })
// })
