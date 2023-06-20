// let s = 'try hello world';
// let s = 'TrY HeLlO';
// function solution(s) {
//     let answer = [];
//     let a = s.split(' ');

//     return a;
// }

// for (let i = 0; i < s.length; i++) {
//     if (i % 2 === 0) {
//         a = a.concat(s[i].toUpperCase());
//     } else {
//         a = a.concat(s[i]);
//     }
// }

// console.log(solution(s));

// // console.log(solution(s));

// let a = 'hello world';
// a[0] = a[0].toUpperCase();

// console.log(a);

//문자열에서 따로따로 꺼내서 쓰는건 안됨.

function solution(s) {
    let a = s.split(' ');
    let b;
    let d = '';
    for (let i = 0; i < a.length; i++) {
        b = a[i].split('');
        let c = '';
        for (let j = 0; j < b.length; j++) {
            if (j % 2 === 0) {
                b[j] = b[j].toUpperCase();
            } else {
                b[j] = b[j].toLowerCase();
            }
            c = c.concat(b[j]);
        }
        if (i === a.length - 1) {
            d = d.concat(c);
        } else {
            d = d.concat(c + ' ');
        }
        console.log(d);
    }
    return d;
}

// 내가 멍청했던 점을 돌아보자.

// 1. 문자열을 대체하기 위해서는 replace() 메서드를 써야 한다.
// b[j] = b[j].toUpperCase();
// 이런식으로 바로 대입할려고 해도 대입되지 않음.
// 옳은 방법 b[j] = b[j].replace(b[j], b[j].toUpperCase());

// let a = 'helloworld';

for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
        a = a.replace(a.charAt(i), a.charAt(i).toUpperCase());
        console.log(a);
    } else {
        a = a.replace(a.charAt(i), a.charAt(i).toLowerCase());
        console.log(a);
    }
    console.log(a.charAt(i));
}

// console.log(a);
// 하지만 이 친구도, 겹쳐있는 알파벳이 있을 경우, 이상하게 출력이 된다.
// why? replace() 메서드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환합니다.
// pattern이 문자열 인 경우, 첫 번째 문자열만 치환이 되며 원래 문자열은 변경되지 않습니다.
// 그래서 l이 이상하게 변형되는게 보임
// Helloworld
// H
// Helloworld
// e
// HeLloworld
// L
// HeLloworld
// l
// HeLlOworld
// O
// HeLlOworld
// w
// HeLlOwOrld
// O
// HeLlOwOrld
// r
// HeLLOwOrld
// l
// HeLLOwOrld
// d
// HeLLOwOrld

// 2. map과 join을 쓰면 더욱 깔끔해진다.
// function toWeirdCase(s) {
//     return s
//         .split(' ') // s를 문자열로 나누기
//         .map(
//             (
//                 i // map으로 전체 배열 돌기
//             ) =>
//                 i
//                     .split('') // 문자 하나 하나 나누기
//                     .map((j, key) => (key % 2 === 0 ? j.toUpperCase() : j.toLowerCase())) // 문자 하나 하나 나눈거를, map으로 다시 돌리고, 홀수면 lower, 짝수면 UPPER
//                     .join('') // 문자열 합쳐 단어 만들기
//         )
//         .join(' '); // 문자 합쳐 문장 만들기
// }
