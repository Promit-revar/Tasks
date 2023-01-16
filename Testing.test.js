const fs=require('fs');
const{ expect,test}= require('jest');
// Imported Functions ...
const {LargestEvenNumber,LargestEvenNumberArrow} = require('./Question1/LargestEvenNumber');
const {isAllDigitsSame,isAllDigitsSameArrow}=require('./Question2/AllDigitsSame');
const {ChangeCase,ChangeCaseArrow}=require('./Question3/ChangeCase');
const {LongestString,LongestStringArrow}=require('./Question4/LongestString');
const {isLeapYear,isLeapYearArrow}=require('./Question5/LeapYear');
const {StringCheck,StringCheckArrow}=require('./Question6/StringCheck');
const {StringConcat,StringConcatArrow}=require('./Question7/StringConcat');
const {CountVowels,CountVowelsArrow}=require('./Question8/CountVowels');
const {ReplaceString,ReplaceStringArrow}=require('./Question9/ChangeString');

// Testing Testcases...



test('Question 1 Regular Function', () => {
  fs.readFile('./Question1/testcases.txt',(err,data)=>{
    fs.readFile('./Question1/Answers.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
            
        expect(LargestEvenNumber(input.split(','))).toBe(parseInt(expected[i]));
      });
    });
  });
  
});
test('Question 1 Arrow Function', () => {
  fs.readFile('./Question1/testcases.txt',(err,data)=>{
    fs.readFile('./Question1/Answers.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
            
        expect(LargestEvenNumberArrow(input.split(','))).toBe(parseInt(expected[i]));
      });
    });
  });
  
});
test('Question 2 Regular Function', () => {
  fs.readFile('./Question2/testcases.txt',(err,data)=>{
    fs.readFile('./Question2/Answers.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
            
        expect(isAllDigitsSame(parseInt(input))).toBe(JSON.parse(expected[i]));
      });
    });
  });
  
});
test('Question 2 Arrow Function', () => {
  fs.readFile('./Question2/testcases.txt',(err,data)=>{
    fs.readFile('./Question2/Answers.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
            
        expect(isAllDigitsSameArrow(parseInt(input))).toBe(JSON.parse(expected[i]));
      });
    });
  });
  
});
test('Question 3 Regular Function', () => {
  fs.readFile('./Question3/testcases.txt',(err,data)=>{
    fs.readFile('./Question3/Answers.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
            
        expect(ChangeCase(input)).toBe(expected[i]);
      });
    });
  });
  
});
test('Question 3 Arrow Function', () => {
  fs.readFile('./Question3/testcases.txt',(err,data)=>{
    fs.readFile('./Question3/Answers.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
            
        expect(ChangeCaseArrow(input)).toBe(expected[i]);
      });
    });
  });
  
});
test('Question 4 Regular Function', () => {
  fs.readFile('./Question4/testcases.txt',(err,data)=>{
    fs.readFile('./Question4/Answers.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
        input=input.split(',');
        expect(LongestString(input)).toBe(expected[i]);
      });
    });
  });
  
});
test('Question 4 Arrow Function', () => {
  fs.readFile('./Question4/testcases.txt',(err,data)=>{
    fs.readFile('./Question4/Answers.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
        input=input.split(',');
        expect(LongestStringArrow(input)).toBe(expected[i]);
      });
    });
  });
  
});
test('Question 5 Regular Function', () => {
  fs.readFile('./Question5/testcases.txt',(err,data)=>{
    fs.readFile('./Question5/Answers.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
            
        expect(isLeapYear(parseInt(input))).toBe(expected[i]);
      });
    });
  });
  
});
test('Question 5 Arrow Function', () => {
  fs.readFile('./Question5/testcases.txt',(err,data)=>{
    fs.readFile('./Question5/Answers.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
            
        expect(isLeapYearArrow(parseInt(input))).toBe(expected[i]);
      });
    });
  });
  
});
test('Question 6 Regular Function', () => {
  fs.readFile('./Question6/testcases.txt',(err,data)=>{
    fs.readFile('./Question6/Answers.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
            
        expect(StringCheck(input)).toBe((expected[i]=='Invalid Input')?expected[i]:JSON.parse(expected[i]));
      });
    });
  });
  
});
test('Question 6 Arrow Function', () => {
  fs.readFile('./Question6/testcases.txt',(err,data)=>{
    fs.readFile('./Question6/Answers.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
            
        expect(StringCheckArrow(input)).toBe((expected[i]=='Invalid Input')?expected[i]:JSON.parse(expected[i]));
      });
    });
  });
  
});
test('Question 7 Regular Function', () => {
  fs.readFile('./Question7/testcases.txt',(err,data)=>{
    fs.readFile('./Question7/Answers.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
        input=input.split(',');
        expect(StringConcat(input)).toBe(expected[i]);
      });
    });
  });
  
});
test('Question 7 Arrow Function', () => {
  fs.readFile('./Question7/testcases.txt',(err,data)=>{
    fs.readFile('./Question7/Answers.txt',(error,answer)=>{
            
      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
        input=input.split(',');
        expect(StringConcatArrow(input)).toBe(expected[i]);
      });
    });
  });
  
});
test('Question 8 Regular Function', () => {
  fs.readFile('./Question8/testcases.txt',(err,data)=>{
    fs.readFile('./Question8/Answers.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
            
        expect(CountVowels(input)).toBe(parseInt(expected[i]));
      });
    });
  });
  
});
test('Question 8 Arrow Function', () => {
  fs.readFile('./Question8/testcases.txt',(err,data)=>{
    fs.readFile('./Question8/Answers.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
            
        expect(CountVowelsArrow(input)).toBe(parseInt(expected[i]));
      });
    });
  });
  
});

test('Question 9 Regular Function', () => {
  fs.readFile('./Question9/testcases.txt',(err,data)=>{
    fs.readFile('./Question9/Answer.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
            
        expect(ReplaceString(input)).toBe(expected[i]);
      });
    });
  });
  
});
test('Question 9 Arrow Function', () => {
  fs.readFile('./Question9/testcases.txt',(err,data)=>{
    fs.readFile('./Question9/Answer.txt',(error,answer)=>{

      let expected=answer.toString().split('\n');
      let inputs=data.toString().split('\n');
      inputs.forEach((input,i)=>{
            
        expect(ReplaceStringArrow(input)).toBe(expected[i]);
      });
    });
  });
  
});
