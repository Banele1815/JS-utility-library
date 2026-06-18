/**
 * Capitalize the First Letter of a String
 *
 * Time Complexity: O(n)
 * The function creates a new string by changing the first letter
 * to uppercase and adding the rest of the string.
 *
 * Space Complexity: O(n)
 * A new string is created and returned.
 */

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} text - The string to capitalize.
 * @returns {string} The string with the first letter in uppercase.
 */
function capitalizeFirstLetter(text) {
  if (text === "") {
    return "";
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Test Cases
console.assert(
  capitalizeFirstLetter("kamo") === "Kamo",
  "Test 1 Failed: 'kamo' should become 'Kamo'.",
);

console.assert(
  capitalizeFirstLetter("enny") === "Enny",
  "Test 2 Failed: 'enny' should become 'Enny'.",
);

console.assert(
  capitalizeFirstLetter("bea") === "Bea",
  "Test 3 Failed: 'bea' should become 'Bea'.",
);

console.assert(
  capitalizeFirstLetter("koketso") === "Koketso",
  "Test 4 Failed: 'koketso' should become 'Koketso'.",
);

console.assert(
  capitalizeFirstLetter("") === "",
  "Test 5 Failed: An empty string should return an empty string.",
);

console.log("All tests passed!");
