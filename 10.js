function find_average(array) {
    if (array.length==0) return 0; 
    return array.reduce(function (a, b) {
        return a+b;        
    })/array.length;
}
find_average([5]);