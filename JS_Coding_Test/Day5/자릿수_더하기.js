function solution(n) {
    let a = String(n)
        .split('')
        .reduce((acc, cur) => acc + Number(cur), 0);
    return a;
}

let n = 123;

console.log(solution(n));
