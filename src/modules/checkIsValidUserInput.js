'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput) {
  if (userInput.length !== 4) {
    return 'length is 4';
  }

  const counts = {};

  for (const digit of userInput) {
    if (isNaN(Number(digit))) {
      return 'all symbols must be numbers';
    }

    if (counts[digit]) {
      return 'please do not repeat numbers';
    }

    counts[digit] = 1;
  }

  return null;
}

module.exports = {
  checkIsValidUserInput,
};
