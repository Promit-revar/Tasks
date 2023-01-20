exports.DivideNumbers=(num1,num2)=>{
    if(num2===0) throw new Error("Division By 0 not allowed!");
    return num1/num2;
}