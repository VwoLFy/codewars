function abbrevName(name) {
    var arr = name.split(" ");
    return arr[0][0].toUpperCase() + "." + arr[1][0].toUpperCase();
}
abbrevName("Vit vvv");