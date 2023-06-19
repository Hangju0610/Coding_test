function solution(arr, divisor) {
   // 떨어지는 값이 없을 경우 지정
   let b = [-1];
   // 배열마다 divison으로 나눈 나머지가 0일 경우, sort해서 새로운 배열 형성
   let answer = arr.filter(v => v % divisor === 0).sort((a,b) => a-b)
   if (answer[0] == null) return b
   else return answer
}

// 다른사람의 풀이
function solution(arr, divisor) {
   var answer = arr.filter(v => v%divisor == 0);
   // 삼항연산자를 사용.
   return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}