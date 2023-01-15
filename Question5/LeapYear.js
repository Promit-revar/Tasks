const fs=require('fs');
exports.isLeapYear=function(year){
    if(typeof(year)!="number" || year>9999 || year<1000) return "Invalid Input";
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) return true;
     return false;
}
exports.isLeapYearArrow=(year)=>{
    if(typeof(year)!="number" || year>9999 || year<1000) return "Invalid Input";
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) return true;
     return false;
}
// const MAIN=()=>{
//     fs.readFile("testcases.txt",(err,data)=>{
//         const inputs=data.toString().split('\n').map(element=>{
//             return parseInt(element);
//         });
//         inputs.forEach(input=>{
//             console.log("Input: "+input+"\nisLeapYear: "+isLeapYear(input)+"\nisLeapYearArrow: "+isLeapYearArrow(input)+"\n\n\n");
//         })
//     })
    
// }
// MAIN();