function amIWilson(p) {
    function recursFun(recP) {
        if (recP > 1) {
            return (BigInt (recP) - BigInt (1)) * BigInt (recursFun(recP - 1));
        }
        return 1;
    }
    if (p > 1) {
        let recursP;
        recursP = BigInt (recursFun(p));
        return ((recursP + BigInt (1)) % BigInt (p ** 2) == 0);
    } else return false;
}
alert(amIWilson(prompt("Number")));