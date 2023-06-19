// 카운트 상태 변경 함수 #3
const increase = (function () {
   // 카운트 상태 변수
   let num = 0;
 
   // 클로저
   return function () {
     return ++num;
   };
 })();
 
 // 
 // 이전 상태값을 유지
 console.log(increase()); //1
 console.log(increase()); //2
 console.log(increase()); //3

 // 위 코드 실행되면, '즉시 실행함수'가 호출!!
 // -> 함수가 반환(inner) -> increase에 할당
 // 2. increase변수에 할당된 함수는 자신의 정의된 위치에서 의해서 결정된 상위 스코프인 
 // 즉시 실행 함수의 ' 렉시컬 환경'을 기억하는 클로져 --> let num = 0;을 기억한다
 // 3. 즉시 실행 함수는 -> 즉시 소멸된다!!(outer 함수가 불리자마자 바로 call stack 에서 popup 되는 것과 비슷!!)
 // * 결론 : num은 초기화 X, 외부에서 접근할 수 없는 은닉된 값!! 의도되지 않은 변경도 걱정할 필요가 없다.
 // --> increase에서만 변경할 수 있기 때문에..!!