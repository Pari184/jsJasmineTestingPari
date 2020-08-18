const welcomeFriendsAge = require('../src/index.js');
//Expect welcomeFriendsWithAge("Pari", 1990, "Anu", 1985, "Kavin", 2011) to display (Welcome "Pari", you are 30. Welcome Anu you are 35. Welcome Kavin you are 9.).
describe("welcomeFriendswithAge", () => {
    it("Displays the name and age of 3 persons", () => {
        expect(welcomeFriendsWithAge("Pari", 1990, "Anu", 1985, "Kavin", 2011)).toBe("Welcome Pari you are 30. Welcome Anu you are 35. Welcome Kavin you are 11.");
    });

    it("Throws an error when a string is passed for years", () => {
        expect(welcomeFriendsWithAge("Pari", "1990", "Anu", "1985", "Kavin", "2011")).toThrow();
    });
});