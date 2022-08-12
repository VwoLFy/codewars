function printerError(s) {
    let countErrors = 0;
    for (let char of s) {
        if (char > 'm') countErrors++;
    }
    return countErrors + "/" + s.length;
}

alert ( printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz") );