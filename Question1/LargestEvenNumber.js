const fs=require('fs');
function getLargestEvenNumber(numArray){
    let largest=-1;
    numArray.forEach(element => {
        if(element%2==0 && element>largest){
            largest=element;
        }
    });
    return largest;
}
const getLargestEvenNumberArrow=(numArray)=>{
    let largest=-1;
    numArray.forEach(element => {
        //console.log(element);
        if(element%2==0 && element>largest){
            largest=element;
        }
    });
    return largest;
}
const MAIN=()=>{
    fs.readFile('testcases.txt', (err, data) => {
        if (err) throw err;
        
        data.toString().split('\n').forEach((element)=>{
            //console.log(element);
            console.log(`Simple funtion: ${getLargestEvenNumber(element.split(','))},\n Arrow function: ${getLargestEvenNumberArrow(element.split(','))} \n\n\n`);
        });
        
})
};
MAIN();