exports.isLeapYear=function(year){
  if(typeof(year)!='number' || year>9999 || year<1000) return 'Invalid Input';
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) return 'true';
  return 'false';
};
exports.isLeapYearArrow=(year)=>{
  if(typeof(year)!='number' || year>9999 || year<1000) return 'Invalid Input';
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) return 'true';
  return 'false';
};
