function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while (principal < desired) {
        principal += Math.ceil(principal * interest * (1 - tax));
        years++;
    }
    return years;
}

alert( calculateYears(1000,0.01625,0.18,1200) );