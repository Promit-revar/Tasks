const {TrippleNumbersGetEvenFilter,TrippleNumbersGetEvenReduce} = require('./NumberTripple/NumberTrippler');

describe("Array utilities",()=>{
    describe("Tripple Numbers",()=>{
        it('Should triple all the numbers when an Array is passed for an input and return the even numbers',()=>{
            const result= TrippleNumbersGetEvenFilter([1,2,3]);
            
            expect(result).toEqual([6]);
        })
    })
})
describe("Array utilities",()=>{
    describe("Tripple Numbers Using Reduce",()=>{
        it('Should triple all the numbers when an Array is passed for an input and return the even numbers',()=>{
            const result= TrippleNumbersGetEvenFilter([1,2,3,4]);
            
            expect(result).toEqual([6,12]);
        })
    })
})
describe("Array utilities",()=>{
    describe("Tripple Numbers",()=>{
        it('Should return an error when array is not passed',()=>{
            
            //const err=new Error("Invalid Input");
            expect(()=>TrippleNumbersGetEvenFilter("123")).toThrow("Invalid Input");
        })
    })
})