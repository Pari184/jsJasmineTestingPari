//first - jasmine - project / spec / helloWorld.spec.js < strong >

const calculateBill = require('../src/index.js');
// Expects calculateBill(100) to display 104.
describe("calculateBill", () => {
    it("returns bill amount", () => {
        expect(calculateBill(100)).toBe(104);
    });
    //Expects calculateBill("hundred") to throw error when a string is entered
    it("Throws an error when string is entered", () => {
        expect(calculateBill("hundred")).toThrow();
    });
    //Expects calculateBill(40.8) to display 44.20
    it("returns the bill amount if floating  is entered", () => {
        expect(calculateBill(40.8)).toBe(44.20);
    });
});