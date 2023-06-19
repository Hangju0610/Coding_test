// 함수 solution은 정수 x와 자연수 n을 입력 받아,
//  x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 내 해답
// function solution(x, n) {
//    var answer = [];
//    // 반복문. n번만큼 돌린다
//    // i = 1로 지정. 
//    for (i = 1; i <= n; i++)
//        answer.push(x*i)
//    return answer;
// }

// 다른 사람의 풀이

// 메소드 해설.
// Array(n) => n 크기 만큼의 빈 배열 생성
// .fill => x 값을 배열 모두에 넣어준다.
// map을 통해 새로운 배열을 생성하는데, index + 1 만큼 value 값을 곱해준다.
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
let a = solution(2,5);
console.log(a)
