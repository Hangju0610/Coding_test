function solution(lottos, win_nums) {
    let i = 0;
    let zeros = 0;
    for (let j = 0; j < 6; j++) {
        if (win_nums.includes(lottos[j])) {
            i++;
        } else if (lottos[j] == 0) {
            zeros++;
        }
    }
    console.log(i);
    console.log(zeros);
    let a = i + zeros > 1 ? 7 - (i + zeros) : 6;
    let b = i > 1 ? 7 - i : 6;
    return [a, b];
}

c = [31, 10, 45, 1, 6, 19];
d = [44, 1, 0, 0, 31, 25];
console.log(solution(c, d));

// 다른 사람 풀이
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter((v) => win_nums.includes(v)).length;
    let zeroCount = lottos.filter((v) => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}
