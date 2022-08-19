function getCount(str) {
    return str.split('').reduce((a, b) => (b == 'a' || b == 'e' || b == 'i' || b == 'o' || b == 'u') ? ++a : a, 0);
}

alert( getCount("abracadabra") );