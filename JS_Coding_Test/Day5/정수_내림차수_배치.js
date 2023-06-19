function solution(n) {
    let answer = String(n)
        .split('')
        .sort((a, b) => b - a)
        .join('');
    let answer2 = Number(answer);
    return answer2;
}

console.log(solution(123456789));
