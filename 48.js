function order(words) {

    function findNumber(word) {
        for (let char of word) {
            if (parseInt(char)) return +char;
        }
    }

    words = words.split(" ");
    let string = [];

    for (let word of words) {        
        string[findNumber(word) - 1] = word;        
    }

    return string.join(' ');
}

alert( order("is2 Thi1s T4est 3a") );