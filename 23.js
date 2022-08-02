function findShort(s) {
    let arr = s.split(" ");
    return arr.reduce(function (a, b) {
        b.length < a.length ? a = b : a;
        return a;
    }).length;
}
findShort("sdfs sdfsd 323 gh 435456 a");