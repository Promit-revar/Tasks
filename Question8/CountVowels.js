const fs=require('fs');
exports.CountVowels=function(str){
    let vowels=0;
    for(let i=0;i<str.length;i++){
        if(['a','e','i','o','u'].includes(str[i].toLowerCase())){
            vowels++;
        }
    }
    return vowels;
}
exports.CountVowelsArrow=(str)=>{
    let vowels=0;
    for(let i=0;i<str.length;i++){
        if(['a','e','i','o','u'].includes(str[i].toLowerCase())){
            vowels++;
        }
    }
    return vowels;
}
// const MAIN = ()=>{
//     fs.readFile("testcases.txt",(err,data)=>{
//         const inputs=data.toString().split('\n');
//         inputs.forEach(input=>{
//             console.log("Input: "+input+"\nCountVowels: "+CountVowels(input)+"\nCountVowelsArrow: "+CountVowelsArrow(input)+"\n\n\n");
//         });
//     });
// }
// MAIN();