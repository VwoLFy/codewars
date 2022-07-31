var min = function(list){
    return Math.min.apply(Math, list);;
}

var max = function(list){
    
    return Math.max.apply(Math, list);;
}
arr = [123,123,54,67,2,1,7];
minN = min(arr);
maxN = max(arr);