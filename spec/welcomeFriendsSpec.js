const welcomeFriends = require('../src/index.js');
//Expects welcomeFriends("Pari", "Anu", "Kavin") to display "Welcome Pari,Anu, Kavin"
describe("welcomeFriends", () => {
    it("returns the names of 3 friends with the welcome note", () => {
        expect(welcomeFriends("Pari", "Anu", "Kavin")).toBe("Welcome Pari, Anu, Kavin.");
    });
    //Expects welcomeFriends(100,200,300) to display an error message
    it("throws an error when a number is passed instead of string", () => {
        expect(welcomeFriends(100, 200, 300)).toThrow();
    });
});