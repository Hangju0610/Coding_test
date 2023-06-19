function solution(n) {
   let i = 1;
   let answer = ''
   // 반복문 돌리기
   // i 가 홀수면 수, 짝수면 박
   while(i <= n) {
       answer = answer.concat(i % 2 ===0? "박":"수")
       i++
   }
   return answer;
}