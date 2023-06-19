function solution(a, b) {
   // 대소 관계 정렬, i가 작은 수, j가 큰 수
   let i,j;
   
   if (a === b) {
       return a;
   } else if (a < b) {
      i = a;
      j = b;
   } else {
      i = b;
      j = a;
   }
   let sum = 0
   // 반복문 실행
   for (let k = i; k<=j; k++){
       sum += k
   }
   
   
   return sum;
}

// 다른 사람의 풀이

function adder(a, b){
   var result = 0
   //함수를 완성하세요
   // 양 끝 값 더한걸 곱하기 개수 / 2
   return (a+b) * (Math.abs(a-b)+1) / 2;
}
// 가우스 소거법 활용한 풀이.
// https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=heeman0808&logNo=221325071362
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(3, 5) )