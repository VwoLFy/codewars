function friend(friends){
    let myFr = [];
    for (let i=0; i<friends.length; i++) {
      if (friends[i].length==4) {
        myFr.push(friends[i]);
      }
    }
    return myFr;
    //your code here
  }