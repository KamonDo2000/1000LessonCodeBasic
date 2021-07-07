function S(x, n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    let y = 1;
    for (let j = 1; j <= 2 * i; j++) {
      y *= j;
    }
    count += x ** (2 * i) / y;
  }
  return count;
}
console.log(S(3, 4));
