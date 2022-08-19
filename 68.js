function switcheroo(x){
    let switchStr = '';
    for (let char of x) {
        switchStr += char == 'a' ? 'b' : char == 'b' ? 'a' : char;
    }
    return switchStr;
}