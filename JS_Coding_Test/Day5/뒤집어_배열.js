function solution(n) {
    let answer = String(n)
        .split('')
        .reverse()
        .map((v) => Number(v));
    return answer;
}

console.log(solution(12345));
