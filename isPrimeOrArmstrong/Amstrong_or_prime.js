const fs=require('fs');
const isPrime=(n)=>{
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
const isArmstrong=(n)=>{
   let  m=0,num=n;
    while(n>0){
        m+=Math.pow(n%10,3);
        //console.log(m,n);
        n=Math.floor(n/10);
    }
    return (num===m)?true:false;
}
const Main=()=>{
    // let num=prompt("Enter the Number:");
    let num=153;
    fs.readFile('testcases.txt', (err, data) => {
        if (err) throw err;
        let inputs=data.toString().split('\n').map((item)=>{
            return parseInt(item);
        });
        inputs.forEach(input => {
            console.log("Number:"+input+"\nis Prime: "+isPrime(input)+"\nis ArmStrong: "+isArmstrong(input)+"\n\n\n");
        })
        
        
    })
    //

}
Main();