function rowSumOddNumbers(n) {
    let start = n * (n - 1) + 1;
    let sum = 0;
    if (n == 0) return 0;
    for (let i = 0; i < n; i++) {
        sum += start;
        start += 2;
    }
    return sum;
}
rowSumOddNumbers(3);