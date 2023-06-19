function solution(absolutes, signs) {
   let answer = 0;
   // 절대값 배열 돌리기
       for (let i in absolutes){
         // 조건문 설정, signs가 true이면 더하고, 아니면 빼고
           if (signs[i] === true){
               answer = answer + absolutes[i];
           } else {
               answer = answer - absolutes[i];
           }
       }
   return answer;
}

// reduce를 사용해서 풀어보기

function solution(absolutes, signs) {
   // reduce를 이용한 풀이법.
   // acc : 누적값, 초기값을 지정하지 않을 시 배열의 첫번째 요소가 들어간다.ㅣ
   // cur : 현재 요소
   // idx : 배열 인덱스
   // signs의 값이 true인지 false인지에 따라 삼항 연산자를 사용하여 다르게 계산
   let answer = absolutes.reduce((acc,cur,idx) => signs[idx] === true ? acc + cur : acc - cur,0)
   return answer
}