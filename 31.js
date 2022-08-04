function points(games) {
    let pointsC = 0;
    for (let i = 0; i < games.length; i++) {
        games[i][0] > games[i][2] ? pointsC += 3 :
        games[i][0] == games[i][2] ? pointsC += 1 :
        pointsC;
    }
    return pointsC;
}
alert (points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']));