function validatePIN(pin) {
    var arr = pin.split("");
    for (let i = 0; i < arr.length; i++) {
        if (isFinite(arr[i]) && pin[i] !== "\n") {

        } else {
            return false;
        }
    }
    if ((pin.length == 4 || pin.length == 6)) {
        return true;
    } else {
        return false;
    }
}
validatePIN("123\n");