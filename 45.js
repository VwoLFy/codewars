function queueTime(customers, n) {
    let tillsTime = new Array(n).fill(0);

    while (customers.length) {
        tillsTime[tillsTime.indexOf(tillsTime.reduce((a, b) => a < b ? a : b))]
            += customers.shift();
    };

    return (tillsTime.reduce((a, b) => a > b ? a : b));
}

alert(queueTime([3, 4, 5, 3], 3));