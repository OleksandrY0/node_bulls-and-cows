'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let rand = '';

  while (rand.length < 4) {
    const idx = Math.floor(Math.random() * nums.length);

    rand += nums[idx];
    nums.splice(idx, 1);
  }

  return rand;
}

module.exports = {
  generateRandomNumber,
};
