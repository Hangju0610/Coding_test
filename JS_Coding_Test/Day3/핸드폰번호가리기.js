function solution(phone_number) {
   // 번호 길이 지정
   let n = phone_number.length
   // 별표 생성하기
   let 별표 = '*'.repeat(n - 4)
   // 뒷번호 4자리 자르기 시전
   let 네자리 = phone_number.slice(n - 4, n)
   // concat으로 별표와 뒷번호 4자리 합치기
   let answer = 별표.concat(네자리)
   
   return answer;
}

// 다른 사람의 풀이
// 정규표현식을 사용한 풀이.
// 정규표현식에 대한 학습이 필요.
function hide_numbers(s){
   return s.replace(/\d(?=\d{4})/g, "*");
 }
 
 // 아래는 테스트로 출력해 보기 위한 코드입니다.
 console.log("결과 : " + hide_numbers('01033334444'));
 

 // slice를 조금 더 간단하게 쓰기
 function hide_numbers(s){
   var result = "*".repeat(s.length - 4) + s.slice(-4);
   return result;
 }