function queueTime(customers, n) {
    if (!customers.length) return 0;  
    let tillsTime = [];
    for (let till = 1; till <= n; till++) {
        if (customers.length) tillsTime.push(customers.shift());
    }

    while (customers.length) {
        tillsTime[tillsTime.indexOf(tillsTime.reduce((a, b) => a < b ? a : b))] 
        += customers.shift();
    };

    return(tillsTime.reduce((a, b) => a > b ? a : b) );
}

alert( queueTime([1,2,3,4,5], 100) );