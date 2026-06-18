/**
 * Limits function execution to once every delay ms
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 */
export function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// tests (basic checks)
console.assert(typeof throttle(() => {}, 100) === "function", "Test 1 failed");
console.assert(throttle(() => {}, 100) instanceof Function, "Test 2 failed");
console.assert(typeof throttle(() => console.log("hi"), 50) === "function", "Test 3 failed");