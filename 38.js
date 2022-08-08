function correctTail(bod, tail) {

    sub = bod.substr(bod.length - tail.length);
    alert (sub);
    if (sub == tail) {
        return true;
    } else {
        return false
    }
}
alert( correctTail("tiger","r"));