exports.DoubleNumbers=(numbers)=>{
    if(!Array.isArray(numbers)) throw new Error("Invalid Input");
  
    return numbers.map(element=>element*2);
     
}