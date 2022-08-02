function SeriesSum(n) {
    var sum = 1;
    if (n == 0) return "0.00";
    for (let i = 1; i < n; i++) {
        sum += 1/(1+3*i);
    }
    return sum.toFixed(2);
}
SeriesSum(5);