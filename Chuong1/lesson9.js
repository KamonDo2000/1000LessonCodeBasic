let count = 1;
const T = (n) => {
  for (i = 1; i <= n; i++) {
    count *= i;
  }
  return count;
};
console.log(T(7));
