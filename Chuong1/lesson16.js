function S(x, n) {
  let count = 0;
  for (i = 1; i <= n; i++) {
    let y = 0;
    for (j = 1; j <= i; j++) {
      y += j;
    }
    count += x ** i / y;
  }
  return count;
}
console.log(S(3, 3));
