// 카운트 상태 변경 함수 #1
// 함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터를 구현해요!

// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
    // 카운트 상태를 1만큼 증가시킨다.
    return ++num;
};

console.log(increase()); // 1
num = 100; // 치명적인 단점이 있어요.
console.log(increase()); // 101
console.log(increase()); // 102

// 보완 사항
// 1 카운트 상태(num 변수의 값) => increase 함수가 호출되기 전까지는 변경되면 안됨.
// 2. 카운트 상태는 increase 함수만이 변경할 수 있어야 한다.
// 3. 전역변수 num 이놈이 문제다. -> 지역변수로??
