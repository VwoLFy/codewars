function count(string) {    
    
    let charCount = {};
    
    for (let char of string) {
        charCount[char] = charCount[char] ?? 0;
        charCount[char]++;
    }    

    return charCount;
}

alert( count("aba") );