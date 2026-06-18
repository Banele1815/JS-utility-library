/**
 * Formats a Date object into YYYY-MM-DD format
 * @param {Date} date
 * @returns {string}
 */
export function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// tests
console.assert(formatDate(new Date("2026-01-01")) === "2026-01-01", "Test 1 failed");
console.assert(formatDate(new Date("2026-12-25")) === "2026-12-25", "Test 2 failed");
console.assert(typeof formatDate(new Date()) === "string", "Test 3 failed");