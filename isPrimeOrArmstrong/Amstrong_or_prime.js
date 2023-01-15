const fs=require('fs');
exports.isPrime=(n)=>{
    if(n===0 || n===1){
        return false;
    }
    let limit=Math.round(Math.sqrt(n));
    for(var i=2;i<limit;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
exports.isArmstrong=(n)=>{
   let  m=0,num=n;
   let l=n.toString().length;
    while(n>0){
        m+=Math.pow(n%10,l);
        //console.log(m,n);
        n=Math.floor(n/10);
    }
    return (num===m)?true:false;
}
