function S(n) {
  for (i = 1; i <= n; i++) {
    n % i === 0 && console.log(i);
  }
}

S(18);
