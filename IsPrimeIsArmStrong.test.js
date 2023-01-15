const {isPrime,isArmstrong}= require('./isPrimeOrArmstrong/Amstrong_or_prime');
test('is Prime', () => {
    expect(isPrime(2)).toBe(true);
        
})
test('is Prime', () => {
    expect(isPrime(1)).toBe(false);
        
})
test('is Prime', () => {
    expect(isPrime(871)).toBe(false);
        
})
test('is Prime', () => {
    expect(isPrime(3)).toBe(true);
        
})
test('is Armstrong', () => {
    expect(isArmstrong(153)).toBe(true);
        
})
test('is Armstrong', () => {
    expect(isArmstrong(213)).toBe(false);
        
})
test('is Armstrong', () => {
    expect(isArmstrong(1)).toBe(true);
        
})
test('is Armstrong', () => {
    expect(isArmstrong(0)).toBe(true);
        
})
    
  