function S(x, n) {
  count = 0;
  for (i = 1; i <= n; i++) {
    count += x ** i;
  }
  return count;
}

console.log(S(3, 4));
