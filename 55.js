function repeatStr(n, s) {
    return new Array(n).fill(s).join('');
}
alert( repeatStr(3, "*") );