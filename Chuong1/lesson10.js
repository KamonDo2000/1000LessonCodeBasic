const T = (x, n) => x ** n;
console.log(T(3, 6));

const x = 3;
const n = 6;
let count = 1;
for (i = 1; i <= n; i++) {
  count *= x;
}
console.log(count);
