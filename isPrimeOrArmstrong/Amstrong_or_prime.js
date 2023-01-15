const isPrime=(n)=>{
    if(n===0 || n===1){
        return false;
    }
    let limit=Math.round(Math.sqrt(n));
    for(var i=2;i<limit;i++){
        if(n%i==0){
            return true;
        }
    }
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
    console.log("is Prime: "+isPrime(num)+"\nis ArmStrong: "+isArmstrong(num));

}
Main();