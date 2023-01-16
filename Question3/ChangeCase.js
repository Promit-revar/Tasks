
exports.ChangeCaseArrow = (str)=>{
  if(typeof(str)!= 'string') return 'Input should be a string!';
  let result='';
  for(var i=0;i<str.length;i++){
    if(str[i]===str[i].toUpperCase()){
      result+=str[i].toLowerCase();
    }
    else{
      result+=str[i].toUpperCase();
    }
  }
    
  return result;
};
exports.ChangeCase=function(str){
  if(typeof(str)!= 'string') return 'Input should be a string!';
  let result='';
  for(var i=0;i<str.length;i++){
    if(str[i]===str[i].toUpperCase()){
      result+=str[i].toLowerCase();
    }
    else{
      result+=str[i].toUpperCase();
    }
  }
  return result;
};
