function countSheeps(arrayOfSheep) {
    var count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        arrayOfSheep[i] == true ? count++: 0;
    }
    return count;
}