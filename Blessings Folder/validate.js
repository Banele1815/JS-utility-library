/**
 * Validates an email address.
 *
 * Time Complexity: O(n)
 * The function checks the email once using a regular expression.
 *
 * Space Complexity: O(1)
 * Only a small amount of memory is used.
 */

/**
 * Checks if an email address is valid.
 *
 * @param {string} email - The email address to check.
 * @returns {boolean} True if the email is valid, otherwise false.
 */
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

// Test emails
console.log(validateEmail("kamo@gmail.com")); // true
console.log(validateEmail("enny@yahoo.com")); // true
console.log(validateEmail("bea.gmail.com")); // false
console.log(validateEmail("koketso@")); // false
console.log(validateEmail("hello@zaio.co.za")); // true
