function switchItUp(number) {
    let numbObj = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
    }

    return numbObj[number];
}

alert( switchItUp(5) );

alert(["Zero", "Two"][3]);