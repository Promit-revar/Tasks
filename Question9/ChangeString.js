const fs=require('fs');
function ReplaceString(str){
    let result="";
    for(let i=0;i<str.length;i++){
        if( str.charCodeAt(i)>=65 && str.charCodeAt(i)<91){
        result+=String.fromCharCode(((str.charCodeAt(i)-64)%26)+65);
        }
        else if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<123){
            result+=String.fromCharCode(((str.charCodeAt(i)-96)%26)+97);
        
        }
        else{
            result+=str[i];
        }
    }
    return result;
}
const ReplaceStringArrow = (str)=>{
    let result="";
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<91){
        result+=String.fromCharCode(((str.charCodeAt(i)-64)%26)+65);
        }
        else if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<123){
            result+=String.fromCharCode(((str.charCodeAt(i)-96)%26)+97);
        
        }
        else{
            result+=str[i];
        }
    }
    return result;
}
const MAIN=()=>{
    fs.readFile("testcases.txt",(err,data)=>{
        const inputs=data.toString().split('\n');
        inputs.forEach(input=>{
            console.log("Input: "+input+"\nReplaceString: "+ReplaceString(input)+"\nReplaceStringArrow: "+ReplaceStringArrow(input)+"\n\n\n");
        })
    })
}
MAIN();