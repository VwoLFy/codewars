function multiply(number){
    let digit = 1;
    while (Math.abs(number/(10**digit)) >= 1) {
      digit++;
    }
    return number*(5**digit);
  }