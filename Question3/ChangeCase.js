const fs=require('fs');
const { type } = require('os');
const ChangeCaseArrow = (str)=>{
    if(typeof(str)!= "string") return "Input should be a string!";
    for(var i=0;i<str.length;i++){
        if(str[i]===str[i].toUpperCase()){
            str[i]=str[i].toLowerCase();
        }
        else{
            str[i]=str[i].toUpperCase();
        }
    }
    return str;
}
function ChangeCase(str){
    if(typeof(str)!= "string") return "Input should be a string!";
    for(var i=0;i<str.length;i++){
        if(str[i]===str[i].toUpperCase()){
            str[i]=str[i].toLowerCase();
        }
        else{
            str[i]=str[i].toUpperCase();
        }
    }
    return str;
}
const MAIN=()=>{
    fs.readFile('testcases.txt', (err, data) => {
        if (err) throw err;
        let inputs=data.toString().split('\n');
        inputs.forEach(str=>{
            //console.log(typeof(str));
            console.log("Input: "+str+"\nChangeCase: "+ChangeCase(str)+"\nChangeCaseArrow: "+ChangeCaseArrow(str)+"\n\n\n");
        })
    });
}
MAIN();