/**
 * Calculates the area of a rectangle.
 *
 * @param {number} length - The length of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @returns {number} The calculated area.
 */
export function calculateArea(length, width) {
  return length * width;
}

// Tests
console.assert(calculateArea(5, 3) === 15, "Test 1 Failed");
console.assert(calculateArea(10, 2) === 20, "Test 2 Failed");
console.assert(calculateArea(0, 5) === 0, "Test 3 Failed");