const {DivideNumbers} = require("./DivisionOfNumbers");
describe("Exception Handling", () => {
    it('Should return an error when 0 is passed as the second argument', () => {

        //const err=new Error("Invalid Input");
        expect(() => DivideNumbers(20,0)).toThrow("Division By 0 not allowed!");
    }),
    it('Should divide arg1 by arg2', () => {

        //const err=new Error("Invalid Input");
        expect(DivideNumbers(20,4)).toBe(5.0);
    })
})

    
