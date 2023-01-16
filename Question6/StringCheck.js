const fs=require('fs');
exports.StringCheckArrow=(str)=>{
    if(typeof(str) != 'string' || str.length<6) return "Invalid Input";
    return (str.substr(-6,6)==="Script").toString();
}
exports.StringCheck=function(str){
    if(typeof(str) != 'string' || str.length<6) return "Invalid Input";
    return (str.substr(-6,6)==="Script").toString();
}
