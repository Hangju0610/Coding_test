var template = '<ul>\n\t<li><a herf= "#">Home</a></li>\n</ul>';

console.log(template);

var template2 = `<ul>
   <li><a herf="#">Home</a></li>
</ul>`;

console.log(template2);

var first = 'Ung-mo';
var last = 'Lee';
// ES5 : 문자열 연결
console.log('My name is' + first + ' ' + last + '.'); // My name isUng-mo Lee.
// ES6 : 표현식 삽입
console.log(`My name is ${first} ${last}.`);
console.log(`1 + 2 = ${1 + 2}`);

var foo = 'Lee';
// 이전 참조를 제거. foo 변수는 더 이상 'lee'를 참조하지 않는다.
// 유용해 보이지는 않는다. 변수의 스코프를 좁게 만들어 변수 자체를 재빨리 소멸시키는 편이 낫다.
foo = null;

// 심벌 값 생성
var key = Symbol('key');
console.log(typeof key); // symbol
// 객체 생성
var obj = {};
// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌은 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]); // value

var score = 100;
