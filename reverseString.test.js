const reversedString = require("./reverseString");

test("String can be Reversed using this functio", ()=>{
    expect(reversedString("hello")).toBe("olleh");
})