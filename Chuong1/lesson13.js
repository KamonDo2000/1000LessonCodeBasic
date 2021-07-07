function S(x, n) {
  let count = 0;
  for (i = 1; i <= n; i++) {
    count += x ** (2 * i);
  }
  return count;
}

console.log(S(3, 4));
