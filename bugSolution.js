function foo(a, b) {
  // Explicitly handle null and undefined values
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error
  }
  return a + b; }
console.log(foo(1, undefined)); // 1
console.log(foo(1, null)); // 1
console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1)); // 1