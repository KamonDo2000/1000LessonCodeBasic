const x = 6;
const n = 3;
let count = 0;
for (let i = 1; i <= n; i++) {
  count += 1 / (i * x * (i + 1));
}
console.log(count);
