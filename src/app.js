/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const secret = generateRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askGuess() {
  terminal.question('Try to guess a number (****): ', (number) => {
    const error = checkIsValidUserInput(number);

    if (error) {
      console.log(error);

      return askGuess();
    }

    const { bulls, cows } = getBullsAndCows(secret, number);

    console.log(`cows: ${cows}, bulls: ${bulls}`);

    if (bulls === 4) {
      console.log('You win!');
      terminal.close();
    } else {
      askGuess();
    }
  });
}

askGuess();
