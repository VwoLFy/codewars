function correct(string) {
    return string.split("").map(char => { return char == "5" ? char = "S" :
                                                 char == "0" ? char = "O" :
                                                 char == "1" ? char = "I" :
                                                 char}).join("");
}

alert(correct("PAR15"));