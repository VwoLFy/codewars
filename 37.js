function maps(x) {
    let newX = [];
    for (let i = 0; i < x.length; i++) {
        newX.push(x[i] * 2);
    }
    return newX;
}
alert(maps([4, 1, 1, 0, 4]));