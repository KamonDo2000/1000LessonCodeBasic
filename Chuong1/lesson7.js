const n = 9;
let count = 0;
for (i = 1; i <= n; i++) {
  count += i / (i + 1);
}

console.log(count);
