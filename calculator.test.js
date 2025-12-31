const calculator = require('./calculator');

test('Testing my calculator', ()=> {
    expect(calculator(1, '+', 2)).toBe(3);
    expect(calculator(2, '-', 1)).toBe(1);
    expect(calculator(1, '*', 2)).toBe(2);
    expect(calculator(10, '/', 2)).toBe(5);
    expect(calculator(0, '+', 2)).toBe("input number cannot be zero");
})
