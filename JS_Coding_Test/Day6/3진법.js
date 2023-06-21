function solution(n) {
    if (n < 3) return n;
    let 몫 = n;
    let 나머지 = 0;
    let 배열 = [];
    let i = 0;
    let answer = 0;
    // 3진법으로 나눠주기
    while (true) {
        나머지 = 몫 % 3;
        배열[i] = 나머지;
        몫 = Math.floor(몫 / 3);

        if (몫 < 3) {
            배열[i + 1] = 몫;
            break;
        }
        i++;
    }
    console.log(배열);
    console.log(i);

    // 3진법인 수를 역으로 곱해주기
    for (let j = 0; j <= i + 1; j++) {
        console.log(j);
        answer += 배열[j] * 3 ** (i + 1 - j);
    }
    console.log(answer);
    return answer;
}

solution(2);

// 다른 사람들의 풀이

// parseInt -> 문자열 인자를 받아 특정 진수의 정수를 반환한다.
// n.tostring(i) -> i진법으로 변경해줌
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}
