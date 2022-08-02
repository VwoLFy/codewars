function sumMix(x){
    var sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    return sum;
}
sumMix(["1","2","3",4]);