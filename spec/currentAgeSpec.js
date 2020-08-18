const currentAge = require('../src/index.js');
//Expect currentAge(1990) to display 30.
describe("currrentAge", () => {
    it("returns the Age of a person", () => {
        expect(currentAge(1990)).toBe(30);
    });
    //Expect currentAge("1990") to throw an error when a string is entered.
    it("Throws an error when a string is passed", () => {
        expect(currentAge("Thousand Nine Hundread and Ninty")).toThrow();
    });
});