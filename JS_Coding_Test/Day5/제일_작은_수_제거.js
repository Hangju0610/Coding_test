function solution(arr) {
    if (arr.length === 1) return [-1];
    let a = arr.reduce((acc, cur) => (acc < cur ? acc : cur));
    let index = arr.indexOf(a);
    let answer = arr.filter(function (arr) {
        return arr > a;
    });
    return answer;
}

console.log(solution([4, 2, 3, 1, 5]));

// 천재적인 풀이법

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    if (arr.length < 1) return [-1];
    return arr;
}
