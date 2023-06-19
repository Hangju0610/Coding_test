const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

// outer함수를 실행해서 innerFunc에 담는다.
// outer return 부분을 innerFunc에 담는다.
const innerFunc = outer();
// -------------------------- 여기서는.. outer함수의 실행컨텍스트는??
innerFunc();

// 변화해보자.
// const innerFunc = function () {
//    console.log(x);
//  };