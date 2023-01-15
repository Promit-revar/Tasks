const fs=require('fs');
const isAllDigitsSameArrow=(num)=>{
    if(typeof(num)=='string') return "Number Should be an Integer";
    let num2=num%10;
    while(num>0){
        if(num%10!=num2) return false;
        num=Math.floor(num/10);
    }
    return true;
}
function isAllDigitsSame(num){
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
        inputs.forEach(input => {
            console.log("Number:"+input+"\nisAllDigitSame: "+isAllDigitsSame(input)+"\nisAllDigitSameArrow: "+isAllDigitsSameArrow(input)+"\n\n\n");
        })
    });
}
MAIN();