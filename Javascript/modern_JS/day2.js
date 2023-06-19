// 변수에는  10 + 20이 평가되어 생성된 숫자 값 30이 할당된다.
//var sum = 10 + 20;


var score = 100; // 1
var score = 50 + 50; // 2
score; // 3

var x = 1 + 2;

// 식별자 표현식 x는 3으로 평가된다.
x + 3; // 6

// function foo () {
//    return 
//    {}
//    // ASI의 동작 결과 -> return; {};
//    // 개발자의 예측 => return {};
// }

// console.log(foo())

// 변수 선언문은 값으로 평가될 수 없으므로 표현식이 아니다.
// var x;
// // 1,2, 1+2, x = 1+2는 모두 표현식이다.
// // x = 1 + 2는 표현식이면서 완전한 문이기도 하다.
// x = 1 + 2

// // // 표현식이 아닌 문은 값처럼 사용할 수 없다.
// // var foo = var x; // SyntaxError: Unexpected token 'var'

// //표현식인 문은 값처럼 사용할 수 있다.
// var foo = x = 100;
// console.log(foo);

// console.log(0.1+0.2);

var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수

var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

console.log(binary === octal); // true
console.log(octal === hex); // true

console.log(1 === 1.0) // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5


var string;
string = '작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";

var template = `Template literal`
console.log(template) // Template literal