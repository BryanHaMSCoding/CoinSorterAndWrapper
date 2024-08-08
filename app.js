const dollarFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
//TODO Define Variables for Coins:
//TODO Create variables to store the number of each type of coin: pennies, nickels, dimes, and quarters.
//TODO Calculate Total Value of Coins:
//TODO Write code to calculate the total value of each type of coin in dollars.
//TODO Calculate the combined total value of all coins.
//!Sort Coins into Wrappers:
//!Use the standard capacity for each type of coin wrapper:
//TODO Calculate the number of wrappers needed for each type of coin.
//TODO Calculate the remaining coins that do not fill a wrapper completely.
//!Output Results:
//!Use console.log to display the number of wrappers needed for each type of coin.
//!Use console.log to display the total amount in dollars.
const coinNames = ["pennies", "nickels", "dimes", "quarters"];
const coinValue = [0.01, 0.05, 0.10, 0.25];
const coinAmount = [300, 300, 300, 300];
const coinsPerWrapper = [50, 40, 50, 40];
let totalValue = 0;
debugger
for (let i = 0; i < coinNames.length; i++) {
    
    totalValue += coinValue[i] * coinAmount[i];

    let wrappersNeeded = Math.floor(coinAmount[i] / coinsPerWrapper[i]);
    let remainingCoins = coinAmount[i] % coinsPerWrapper[i];
    let valueOfCoins = coinAmount[i] * coinValue[i];

    console.log(`Wrappers needed for ${coinNames[i]} is ${wrappersNeeded}`);
    console.log(`Remaining ${coinNames[i]}: ${remainingCoins}`);
    console.log(`Value of ${coinNames[i]} is ${dollarFormat.format(valueOfCoins)}`);
}//end for loop

console.log("Total value of coins is " + dollarFormat.format(totalValue));

/*
console.log("======================================================");
for ( let i = 0; i < coinNames.length; i++) {
    console.log(coinNames[i]);
    console.log(coinValue[i]);
}//end for loop
*/