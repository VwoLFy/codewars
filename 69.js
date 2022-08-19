var number = function (array) {
    return array.map((string, index, arr) => (arr[index] = (index + 1 + ": " + string)));
}

alert( number(["a", "b", "c"]) );