function openOrSenior(data) {
    var res = [];
    for (let i = 0; i < data.length; i++) {
        data[i][0]>=55 && data[i][1]>7 ? res.push("Senior"): res.push("Open");
    }
    return res;
}
openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]);