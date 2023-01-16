exports.LongestStringArrow=(strs)=>{
  let maxStr='';
  let maxLen=0;
  strs.forEach(str => {
    if(maxLen<str.length){
      maxLen=str.length;
      maxStr=str;
    }
  });
  return maxStr;
};
exports.LongestString= function(strs){
  let maxStr='';
  let maxLen=0;
  strs.forEach(str => {
    if(maxLen<str.length){
      maxLen=str.length;
      maxStr=str;
    }
  });
  return maxStr;
};

