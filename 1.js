function countBy(x, n) {
    let z = [];
    let count = 0;
    for (let i=1; count<n; i++) {
      if (i%x==0) {
        z.push (i);
        count++;
      }
    }
    return z;
  }
  countBy(2,4);