function doubleChar(str) {
    let newStr = "";
    for (let char of str) {
        newStr += char + char;
    }
    return newStr;
}

alert( doubleChar("abcd") );