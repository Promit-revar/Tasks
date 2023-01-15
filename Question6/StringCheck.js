const fs=require('fs');
exports.StringCheckArrow=(str)=>{
    if(typeof(str) != 'string' || str.length<6) return "Invalid Input";
    return str.substr(-6,6)==="Script";
}
exports.StringCheck=function(str){
    if(typeof(str) != 'string' || str.length<6) return "Invalid Input";
    return str.substr(-6,6)==="Script";
}
// const MAIN=()=>{
//     fs.readFile("testcases.txt",(err,data)=>{
//         if(err) console.log(err);
//         const inputs=data.toString().split('\n');
//         inputs.forEach(input=>{
//             console.log("Input: "+input+"\nStringCheck: "+StringCheck(input)+"\nStringCheckArrow: "+StringCheckArrow(input)+"\n\n\n");
//         })
//     })
// }
// MAIN();