function solution(box, n) {
   let volume = box.reduce((cur,acc) => {
      return cur * Math.floor(acc/n); 
   },1)
   return answer = volume;
}