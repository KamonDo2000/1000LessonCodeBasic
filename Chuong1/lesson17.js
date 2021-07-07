function S(x, n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let y = 1;
    for (let j = 1; j <= i; j++) {
      y *= j;
    }
    count += x ** i / y;
  }
  return count;
}
console.log(S(2, 3));
