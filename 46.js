function findNextPower(val, pow_) {
    
    return Math.pow(
                Math.ceil(
                    Math.pow(val + 1, 1 / pow_)
                ), pow_);
}
alert(findNextPower(1245678, 5));