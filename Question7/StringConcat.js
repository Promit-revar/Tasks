const fs=require('fs');
exports.StringConcat=function(strs){

    if(strs.length!=2) return "Invalid Input!";
    return strs[0].substr(1)+strs[1].substr(1);
}
exports.StringConcatArrow=(strs)=>{
    if(strs.length!=2) return "Invalid Input!";
    return strs[0].substr(1)+strs[1].substr(1);
}
