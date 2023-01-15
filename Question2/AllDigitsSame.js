const fs=require('fs');
exports.isAllDigitsSameArrow=(num)=>{
    if(typeof(num)=='string') return "Number Should be an Integer";
    let num2=num%10;
    while(num>0){
        if(num%10!=num2) return false;
        num=Math.floor(num/10);
    }
    return true;
}
exports.isAllDigitsSame=function(num){
    if(typeof(num)=='string') return "Number Should be an Integer";
    if(typeof(num)=='string') return "Number Should be an Integer";
    let num2=num%10;
    while(num>0){
        if(num%10!=num2) return false;
        num=Math.floor(num/10);
    }
    return true;
}
const MAIN=()=>{
    fs.readFile('testcases.txt', (err, data) => {
        if (err) throw err;
        let inputs=data.toString().split('\n').map((item)=>{
            return parseInt(item);
        });
        inputs.push("888888");
        return inputs;
    });
}
