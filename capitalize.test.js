const capitalize = require("./capitalize");

test("First letter of String is capitalized", ()=> {
    expect(capitalize("hello")).toBe("Hello");
})

