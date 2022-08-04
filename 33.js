function descendingOrder(n) {
    n = String(n);
    n = n.split('');
    n.sort(function (a,b) { return (b - a); });
    return Number(n.join(''));
}
alert(descendingOrder(+prompt()));