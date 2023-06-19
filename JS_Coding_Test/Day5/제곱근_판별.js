function solution(n) {
    let root = Math.sqrt(n);
    if (root % 1 === 0) return (root + 1) ** 2;
    else return -1;
}

console.log(solution(16));

// Math.pow 메소드는 제곱을 해주는 메소드이다. 참고하자.
