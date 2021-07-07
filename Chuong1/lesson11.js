function S(n) {
  let count = 0;
  for (i = 1; i <= n; i++) {
    let count_j = 1;
    for (j = 1; j <= i; j++) {
      count_j *= j;
    }
    count += count_j;
  }
  return count;
}
console.log(S(5));
