const fs=require('fs');
const LongestStringArrow=(strs)=>{
    let maxStr=null;
    let maxLen=0;
    strs.forEach(str => {
        if(maxLen<str.length){
            maxLen=str.length;
            maxStr=str;
        }
    });
    return maxStr;
}
 function LongestString(strs){
    let maxStr=null;
    let maxLen=0;
    strs.forEach(str => {
        if(maxLen<str.length){
            maxLen=str.length;
            maxStr=str;
        }
    });
    return maxStr;
 }
 const MAIN=()=>{
    fs.readFile('testcases.txt',(err,data)=>{
        if(err) console.log(err);
        console.log(data);
        const inputs=data.toString().split('\n').map(element=>{
            //console.log(element);
            return element.split(',');
        });
        inputs.forEach(input=>{
            console.log("Input: "+input+"\nLongestString: "+LongestString(input)+"\nLongestStringArrow: "+LongestStringArrow(input)+"\n\n\n");
        })

    });
 }
 MAIN();