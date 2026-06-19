/**
 * Formats a number into a currency string (USD format).
 *
 * @param {number} amount - The amount to format.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

// Tests
console.assert(formatCurrency(25) === "$25.00", "Test 1 Failed");
console.assert(formatCurrency(19.99) === "$19.99", "Test 2 Failed");
console.assert(formatCurrency(0) === "$0.00", "Test 3 Failed");