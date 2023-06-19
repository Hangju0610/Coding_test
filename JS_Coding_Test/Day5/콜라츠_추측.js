function solution(num) {
    let i = 0;
    while (true) {
        if (num === 1) {
            return i;
            break;
        }
        i++;
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num = num * 3 + 1;
        }

        if (i === 500) {
            return -1;
            break;
        }
    }
}

// 삼항연산자 뜯어보기

function collatz(num) {
    var answer = 0;
    while (num != 1 && answer != 500) {
        num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
        answer++;
    }
    return num == 1 ? answer : -1;
}
