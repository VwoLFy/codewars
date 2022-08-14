function getGrade(s1, s2, s3) {
    let avrgScore = (s1 + s2 + s3) / 3;
    return avrgScore < 60 ? "F" :
           avrgScore < 70 ? "D" :  
           avrgScore < 80 ? "C" :
           avrgScore < 90 ? "B" :
           "A";     
}
alert( getGrade(95,90,93) );