function solution(price, money, count) {
   // totalprice 선언 및 반복문을 통한 계산
   let totalprice = 0
   for (i = 1; i <= count; i++){
       totalprice += price * i
   }
   console.log(totalprice,money)
   // 내돈 - totalprice 가 0보다 작으면, result를 출력하기
   return ((money - totalprice < 0)? totalprice - money : 0);
}

// 가우스 공식 사용한 풀이법

function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
