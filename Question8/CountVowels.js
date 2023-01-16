
exports.CountVowels=function(str){
  let vowels=0;
  for(let i=0;i<str.length;i++){
    if(['a','e','i','o','u'].includes(str[i].toLowerCase())){
      vowels+=1;
    }
  }
  return vowels;
};
exports.CountVowelsArrow=(str)=>{
  let vowels=0;
  for(let i=0;i<str.length;i++){
    if(['a','e','i','o','u'].includes(str[i].toLowerCase())){
      vowels+=1;
    }
  }
  return vowels;
};
