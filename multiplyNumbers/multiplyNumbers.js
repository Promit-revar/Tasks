const fs= require('fs');
const { resolve } = require('path');
const readFileCustom=(fileName)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,data)=>{
            if(err){
                reject(err);
            }
            else if(typeof(parseInt(data.toString()))!="number"){
                reject("Number should be an Integer");
            }
            resolve(data);
        });
    });
}
let product=1;
readFileCustom("file1.txt")
.then(val=>{
    product*=val;
    return readFileCustom("file2.txt");
})
.catch(err=>{
    throw new Error();
})
.then(val=>{
    product*=val;
    return readFileCustom("file3.txt");
})
.catch(err=>{
    throw new Error();
})
.then(val=>{
    product*=val;
    return readFileCustom("file4.txt");
})
.catch(err=>{
    throw new Error();
})
.then(val=>{
    product*=val;
    return readFileCustom("file5.txt");
})
.catch(err=>{
    throw new Error();
})
.then(val=>{
    product*=val;
    console.log(product);
    
});

const getProduct=async()=>{
    let result=await Promise.all([readFileCustom("file1.txt"),readFileCustom("file2.txt"),readFileCustom("file3.txt"),readFileCustom("file4.txt"),readFileCustom("file5.txt")]);
    
    result.reduce((product,val)=>{
        product*Number(val.toString());
    },1);
   //console.log(product);
}
console.log(getProduct());