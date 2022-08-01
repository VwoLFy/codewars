function countPositivesSumNegatives(input) {
    var arr = [];
    count = 0;
    if (!Array.isArray(input)) {return arr}
    if (input.length == 0) {return arr}    
    arr.push(input.reduce(function (a, b) { return b > 0 ? ++count : a }, 0));
    arr.push(input.reduce(function (a, b) { return b < 0 ? a + b : a }, 0));
    return arr;
}
countPositivesSumNegatives();