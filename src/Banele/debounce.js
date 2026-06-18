/**
 * Delays function execution until after a wait time
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 */
export function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// tests (basic structural tests)
console.assert(typeof debounce(() => {}, 100) === "function", "Test 1 failed");
console.assert(debounce(() => {}, 100) instanceof Function, "Test 2 failed");
console.assert(typeof debounce(() => console.log("test"), 50) === "function", "Test 3 failed");