function foo(a, b) {
  // Use short-circuiting OR to provide default values if a or b are null or undefined
  a = a ?? 0; 
  b = b ?? 0; 
  return a + b; 
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 5)); // Output: 5