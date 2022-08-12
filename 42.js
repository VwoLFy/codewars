function duplicateEncode(word) {
    let newWord = '';
    word = word.toLowerCase();
    for (let char of word) {
        let countChar = 0;
        for (let iterator of word) {
            if (char == iterator) countChar++;
        }
        newWord += (countChar > 1) ? ")" : "(";
        }
    return newWord;
    }

alert ( duplicateEncode("vitalii") );