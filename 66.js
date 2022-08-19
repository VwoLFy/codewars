function updateLight(current) {

    let lights = ["green", "yellow", "red"];
    let index = lights.indexOf(current);
    return index == 2 ? lights[0] : lights[index + 1];
}

alert( updateLight("green") );