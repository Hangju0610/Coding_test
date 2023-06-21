function solution(answers) {
    let one = [],
        two = [],
        three = [];
    let moe_answer = [0, 0, 0];
    for (let i = 0; i < answers.length; i++) {
        // 수포자 1번 대입
        one[i] = (i % 5) + 1;

        // 수포자 2번 대입
        if (i % 2 === 0) {
            two[i] = 2;
        } else if (i % 8 === 1) {
            two[i] = 1;
        } else if (i % 8 === 3) {
            two[i] = 3;
        } else if (i % 8 === 5) {
            two[i] = 4;
        } else {
            two[i] = 5;
        }

        // 수포자 3번 대입
        if (i % 10 === 0 || i % 10 === 1) {
            three[i] = 3;
        } else if (i % 10 === 2 || i % 10 === 3) {
            three[i] = 1;
        } else if (i % 10 === 4 || i % 10 === 5) {
            three[i] = 2;
        } else if (i % 10 === 6 || i % 10 === 7) {
            three[i] = 4;
        } else {
            three[i] = 5;
        }
        // 채점하기
        if (one[i] === answers[i]) moe_answer[0]++;
        if (two[i] === answers[i]) moe_answer[1]++;
        if (three[i] === answers[i]) moe_answer[2]++;
    }
    // 결과 내보내기
    let answer = [];
    for (let j = 0; j < 3; j++) {
        if (moe_answer[j] === Math.max(...moe_answer)) {
            answer.push(j + 1);
        }
    }
    return answer;
}
