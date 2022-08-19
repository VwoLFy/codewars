// complete the function
function solution(string) {
    let newStr = '';
    for (let char of string) {
        newStr += (char !== char.toUpperCase() ? char : (" " + char));
    }
    return newStr;
}

alert( solution('camelCasing') );