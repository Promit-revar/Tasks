const fs=require('fs');
exports. ReplaceString=function(str){
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
exports.ReplaceStringArrow = (str)=>{
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
