function solution(n) {
    var answer = 0;
    // n이라는 수가 4보다 작으면, 합성수는 0개이므로 0을 리턴
   if (n < 4) return 0;
   // 횟수 반복문 부터 시행
   for (let i = 4; i <= n; i++){
       console.log(i)
       // 소인수 분해를 통한 합성수 찾기
       // 제곱근보다 작은 값들을 통해 합성수를 찾는다.
       for (let j = 2; j <= Math.sqrt(i); j++){
           console.log(j)
           if (i % j === 0) {
               answer++
               // 값이 있다면 break를 걸어서 정지 시키기
               break;
           }
       }
   }
   return answer;
}

// 다른 사람의 풀이 중 DP를 쓴 것이 있다.
// dp가 뭘까??

function solution2(n) {
   let dp = new Array(n+1).fill(1)
   for(let i = 2 ; i <= n ; i++){
       if(dp[i]){
           for(let j = 2 ; i*j <= n ; j++){
               dp[i*j] = 0
           }
       }
   }
   return dp.filter(el => el === 0).length
}