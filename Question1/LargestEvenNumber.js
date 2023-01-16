exports.LargestEvenNumber=function getLargestEvenNumber(numArray){
  let largest=-1;
  numArray.forEach(element => {
    element=parseInt(element);
    if(element%2==0 && element>largest){
      largest=element;
    }
  });
  return largest;
};
exports.LargestEvenNumberArrow=(numArray)=>{
  let largest=-1;
  numArray.forEach(element => {
    element=parseInt(element);
    if(element%2==0 && element>largest){
      largest=element;
    }
  });
  return largest;
};

