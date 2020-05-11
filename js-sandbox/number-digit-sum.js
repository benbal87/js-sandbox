/**
 * Created by benedek balazs on 30/05/2016.
 *
 * WEEK 17B ASSESSMENT - TASK 01/02 - FILE 01/01 - BENEDEK BALAZS
 *
 * Write a function which randomizes a number (range 1000 .. 9999) and calculate the sum of its digits.
 * For instance, if the randomized number was 1049, program should print: 1 + 0 + 4 + 9 = 14
 */

function SumOfDigits(number) {
    var sumOfDigits = 0;

    while (number > 0) {
        var digit = number % 10;
        number = Math.floor(number / 10);

        sumOfDigits += digit;
    }

    return sumOfDigits;
}

function PrintOutDigitsSum(intervalMinimum, intervalMaximum) {
    var randomNumber = Math.floor((Math.random() * (intervalMaximum - intervalMinimum + 1)) + intervalMinimum);
    var randomNumberString = randomNumber.toString();
    var finalLogOut = "";

    for (var i = 0; i < randomNumberString.length - 1; i++) {
        finalLogOut += randomNumberString[i] + " + ";
    }

    finalLogOut += randomNumberString[randomNumberString.length - 1] + " = " + SumOfDigits(randomNumber);

    console.log("The random generated number is: " + randomNumberString);
    console.log(finalLogOut);
}

PrintOutDigitsSum(1000, 9999);

localStorage.pina = JSON.stringify();