const fs=require('fs');
function StringConcat(strs){

    if(strs.length!=2) return "Invalid Input!";
    return strs[0].substr(1)+strs[1].substr(1);
}
const StringConcatArrow=(strs)=>{
    if(strs.length!=2) return "Invalid Input!";
    return strs[0].substr(1)+strs[1].substr(1);
}
const MAIN=()=>{
    fs.readFile("testcases.txt",(err,data)=>{
        if(err) console.log(err);
        const inputs=data.toString().split("\n").map((element)=>{
            
            return element.split(',');
        });
        
        inputs.forEach(input=>{
            console.log("Input: "+input+"\nStringConcat: "+StringConcat(input)+"\nStringConcatArrow: "+StringConcatArrow(input)+"\n\n\n");
        });
    });
}
MAIN();