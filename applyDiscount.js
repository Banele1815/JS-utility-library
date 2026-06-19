/**
 * Applies a percentage discount to a price.
 *
 * @param {number} price - Original price.
 * @param {number} discountPercent - Discount percentage (0–100).
 * @returns {number} The final price after discount.
 */
export function applyDiscount(price, discountPercent) {
  return price - (price * discountPercent / 100);
}

// Tests
console.assert(applyDiscount(100, 20) === 80, "Test 1 Failed");
console.assert(applyDiscount(50, 10) === 45, "Test 2 Failed");
console.assert(applyDiscount(200, 0) === 200, "Test 3 Failed");