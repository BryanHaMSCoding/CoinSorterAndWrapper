const dollarFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
//?Define Variables for Coins:
//TODO Create variables to store the number of each type of coin: pennies, nickels, dimes, and quarters.
const pennies = 0.01;
const nickels = 0.05;
const dimes = 0.10;
const quarters = 0.25;

const amountOfPennies = 300;
const amountOfNickels = 300;
const amountOfDimes = 300;
const amountOfQuarters = 300;

//?Calculate Total Value of Coins:
//TODO Write code to calculate the total value of each type of coin in dollars.
//TODO Calculate the combined total value of all coins.
let totalPennies = pennies * 300;
let totalNickels = nickels * 300;
let totalDimes = dimes * 300;
let totalQuarters = quarters * 300;

let totalValue = totalPennies + totalNickels + totalDimes + totalQuarters;
console.log("Total value of coins: " + dollarFormat.format(totalValue));

//Sort Coins into Wrappers:
//Use the standard capacity for each type of coin wrapper:
//Pennies: 50 coins per wrapper
let penniesPerWrapper = 50;
//Nickels: 40 coins per wrapper
let nickelsPerWrapper = 40;
//Dimes: 50 coins per wrapper
let dimesPerWrapper = 50;
//Quarters: 40 coins per wrapper
let quartersPerWrapper = 40;

//Calculate the number of wrappers needed for each type of coin.
let pennyWrappers = Math.floor(amountOfPennies / penniesPerWrapper);

let nickelWrappers = Math.floor(amountOfNickels / nickelsPerWrapper);

let dimeWrappers = Math.floor(amountOfDimes / dimesPerWrapper);

let quarterWrappers = Math.floor(amountOfQuarters / quartersPerWrapper);

//Calculate the remaining coins that do not fill a wrapper completely.
let remainingPennies = amountOfPennies % penniesPerWrapper;

let remainingNickels = amountOfNickels % nickelsPerWrapper;

let remainingDimes = amountOfDimes % dimesPerWrapper;

let remainingQuarters = amountOfQuarters % quartersPerWrapper;

//Output Results:
//Use console.log to display the number of wrappers needed for each type of coin.
console.log("Wrappers needed for pennies: " + pennyWrappers);
console.log("Wrappers needed for nickels: " + nickelWrappers);
console.log("Wrappers needed for dimes: " + dimeWrappers);
console.log("Wrappers needed for quarters: " + quarterWrappers);
//Use console.log to display the total amount in dollars.
console.log("Remaining pennies: " + remainingPennies);
console.log("Remaining nickels: " + remainingNickels);
console.log("Remaining dimes: " + remainingDimes);
console.log("Remaining quarters: " + remainingQuarters);

