const fs=require('fs');
function CountVowels(str){
    let vowels=0;
    for(var i=0;i<str.length;i++){
        if(['a','e','i','o','u'].includes(str[i].toLowerCase())){
            vowels++;
        }
    }
    return vowels;
}
const CountVowelsArrow=(str)=>{
    let vowels=0;
    for(var i=0;i<str.length;i++){
        if(['a','e','i','o','u'].includes(str[i].toLowerCase())){
            vowels++;
        }
    }
    return vowels;
}
const MAIN = ()=>{
    fs.readFile("testcases.txt",(err,data)=>{
        const inputs=data.toString().split('\n');
        inputs.forEach(input=>{
            console.log("Input: "+input+"\nCountVowels: "+CountVowels(input)+"\nCountVowelsArrow: "+CountVowelsArrow(input)+"\n\n\n");
        });
    });
}
MAIN();