function calculateBill(billAmount) {
    if (isNaN(billAmount)) {
        throw new Error("Bill Amount must be a number")
    }
    var amountToPay;
    amountToPay = parseFloat(billAmount) + 3 + parseFloat((billAmount) * 0.01)
    return amountToPay;

}
module.exports = calculateBill;

function welcomeFriends(name1, name2, name3) {
    if ((typeof name1 || typeof name2 || typeof name3) !== "string") {
        throw new Error("Name must be a string");
    }
    return `Welcome ${name1}, ${name2}, ${name3}.`;
}
module.exports = welcomeFriends;

function currentAge(birthYear) {
    if (isNaN(birthYear)) {
        throw new Error("Year must be a number");
    }
    var fullDate = new Date();
    var currentYear = fullDate.getFullYear();
    return currentYear - birthYear;
}
module.exports = currentAge;

function welcomeFriendsWithAge(name1, byear1, name2, byear2, name3, byear3) {
    if (isNaN(byear1) || isNaN(byear2) || isNaN(byear3)) {
        throw new Error("Year must be a number");
    }
    var fullDate = new Date();
    var currentYear = fullDate.getFullYear();
    var age1 = currentYear - byear1;
    var age2 = currentYear - byear2;
    var age3 = currentYear - byear3;
    return `Welcome ${name1}, you are ${age1}.Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`

}
module.exports = welcomeFriendsWithAge;

// function createRubric(grade) {
//     if (grade == 11) {
//         return "Perfect";
//     } else if (grade > 8) {
//         return "Excellent";
//     } else if (grade >= 5) {
//         return true;
//     } else {
//         return false;
//     }
// }