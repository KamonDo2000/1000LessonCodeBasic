function T(x, n) {
  let count = 0;
  for (i = 0; i <= n; i++) {
    count += x ** (2 * i + 1);
  }
  return count;
}
console.log(T(3, 4));
