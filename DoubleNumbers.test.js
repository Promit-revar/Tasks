const {DoubleNumbers} = require('./NumberChanger/TwiceTheNumbers.js');

describe("Array utilities",()=>{
    describe("Double Numbers",()=>{
        it('Should double all the numbers when an Array is passed for an input',()=>{
            const result= DoubleNumbers([1,2,3]);
            
            expect(result).toEqual([2,4,6]);
        })
    })
})
describe("Array utilities",()=>{
    describe("Double Numbers",()=>{
        it('Should return an error when array is not passed',()=>{
            
            expect(err=>DoubleNumbers("123")).toThrow('Invalid Input');
        })
    })
})