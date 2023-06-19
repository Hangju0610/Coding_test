function outerFunction(outerVariable) {
    // 내부 함수
    return function innerFunction(innervariable) {
        console.log('Outer Variable ' + outerVariable);
        console.log('Inner Variable ' + innervariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');
// Outer Variable outside
// Inner Variable inside

console.log(newFunction); // [function:innerFunction]
// newFunction('inside');

// 동작 방법
// 1. outerFunction('outside')은 변수 "newFunction"에 할당되는 즉시 호출
// const newFunction = outerFunction('outside');

// newFunction('inside') = innerFunction('inside')

// 호출되면 outerFunction은 변수 "newFunction"을 outerFunction(outerVariable)대신
// innerFunction(innverVariable)을 반환합니다.
// return으로 innerFunction을 반환

// 그런 다음 변수를 newFunction('inside')으로 호출하여 innerFunction('inside')을 호출
// 클로저는 innerFunction이 원래 outerFunction('outside')으로 설정한 outerVariable 매개변수
// 를 기억하고 액세스 할 수 있다는 것입니다.

// 예시

// let a = 'a';

// function functionB() {
//     let c = 'c';
//     console.log(a, b, c);
// }

// function functionA() {
//     let b = 'b';
//     functionB();
//     console.log(a, b);
// }

// functionA();

let a = 'a';
function functionA() {
    function functionB() {
        let c = 'c';
        console.log(a, b, c);
    }
    let b = 'b';
    console.log(a, b);
    functionB();
}

functionA();

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
