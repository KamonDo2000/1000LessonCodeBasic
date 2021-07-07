function S(x, n) {
  let count = 1;
  for (let i = 0; i <= n; i++) {
    let y = 1;
    for (j = 1; j <= 2 * i + 1; j++) {
      y *= j;
    }
    count += x ** (2 * i + 1) / y;
  }
  return count;
}

console.log(S(3, 2));

/**
 * y là tính giai thừa cho biểu thức
 * cho chạy i đến n
 * với mỗi i lại bỏ vô vòng lặp để tính giai thừa nó
 */
