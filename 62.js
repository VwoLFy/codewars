function alphabetPosition(text) {
    let code = '';
    text = text.toLowerCase();

    for (let char of text) {
        code += (char > "\u0060" && char < "\u007B") ? (char.codePointAt(0) - 96) + " " : "";
    }
    
    return code.slice(0, code.length - 1);
}
alert( alphabetPosition("abc") );