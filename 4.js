function sumArray(array) {
  let sum = 0;
  if (!Array.isArray(array)) {
    return 0;
  } else if (array.length <= 1) {
    return 0;
  } else {
    array.sort(compare);
    array.pop();
    array.shift();
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
}

function compare(a, b) {
  return a > b ? 1 : (a == b ? 0 : -1);
}
sumArray([1,3,4]);