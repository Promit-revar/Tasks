exports.isAllDigitsSameArrow=(num)=>{
  if(typeof(num)=='string') return 'Number Should be an Integer';
  let num2=num%10;
  while(num>0){
    if(num%10!=num2) return false;
    num=Math.floor(num/10);
  }
  return true;
};
exports.isAllDigitsSame=function(num){
  if(typeof(num)=='string') return 'Number Should be an Integer';
  if(typeof(num)=='string') return 'Number Should be an Integer';
  let num2=num%10;
  while(num>0){
    if(num%10!=num2) return false;
    num=Math.floor(num/10);
  }
  return true;
};

