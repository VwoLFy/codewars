function solution(str){
    let rev = "";
    for (let i = 0; i < str.length; i++) {
        rev += str[str.length-1-i];        
    }
    return rev;
  }
  let rew = solution("hello");