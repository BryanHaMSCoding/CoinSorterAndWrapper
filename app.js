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
const coinValue = [0.01, 0.05, 0.1, 0.25];
const coinAmount = [300, 300, 300, 300];
const coinsPerWrapper = [50, 40, 50, 40];
let totalValue = 0;

for (let i = 0; i < coinNames.length; i++) {
    
    totalValue += coinValue[i] * coinAmount[i];

    let wrappersNeeded = Math.floor(coinAmount[i] / coinsPerWrapper[i]);
    let remainingCoins = coinAmount[i] % coinsPerWrapper[i];
    let valueOfCoins = coinAmount[i] * coinValue[i];

    console.log(`Wrappers needed for ${coinNames[i]} is ${wrappersNeeded}`);
    console.log(`Remaining ${coinNames[i]}: ${remainingCoins}`);
    console.log(`Value of ${coinNames[i]} is ${dollarFormat.format(valueOfCoins)}`);
    console.log();
}//end for loop

console.log("Total value of coins is " + dollarFormat.format(totalValue));

console.log("======================================================");
/*
for ( let i = 0; i < coinNames.length; i++) {
    console.log(coinNames[i]);
    console.log(dollarFormat.format(coinValue[i]));
}//end for loop
*/
//? Give me the total amount of each coin;
// ex. dime = 234;
//? Convert the total amount of coins into dollars (USD currency)
// ex. dimeCurrencyTotal = $20.20
//? Total amount Currency all together (PenniesCurrencyTotal + QuartersCurrencyTotal... .etc)

let objectPenny = 0;
let objectNickel = 0;
let objectDime = 0;
let objectQuarter = 0;

let totalAmountPenny = 0;
let totalAmountNickel = 0;
let totalAmountDime = 0;
let totalAmountQuarter = 0;

let totalAllCoin = 0;

let challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime']

for (let i = 0; i < challengeData.length; i++) {
    if (challengeData[i] === 'penny') {//then
        objectPenny++
        totalAmountPenny = objectPenny * 0.01;
    }else if (challengeData[i] === 'nickel') {//then
        objectNickel++
        totalAmountNickel = objectNickel * 0.05;
    }else if (challengeData[i] === 'dime') {//then
        objectDime++
        totalAmountDime = objectDime * 0.1;
    }else if (challengeData[i] === 'quarter') {//then
        objectQuarter++
        totalAmountQuarter = objectQuarter * 0.25;
    }else {
        console.log("No Coins Found");
    }//end if else
}//end for loop

console.log("Pennies: " + objectPenny);
console.log("Nickels: " + objectNickel);    
console.log("Dimes: " + objectDime);
console.log("Quarters: " + objectQuarter);

console.log(dollarFormat.format(totalAmountPenny));
console.log(dollarFormat.format(totalAmountNickel));
console.log(dollarFormat.format(totalAmountDime));
console.log(dollarFormat.format(totalAmountQuarter));

totalAllCoin = totalAmountPenny + totalAmountNickel + totalAmountDime + totalAmountQuarter;
console.log(dollarFormat.format(totalAllCoin))