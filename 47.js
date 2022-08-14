function squareDigits(num) {
    num = String(num);
    let sqDigit = '';
    for (let digit of num) {
        sqDigit += String((+digit)**2);
    }
    return +sqDigit;
}

alert( squareDigits(3212) );