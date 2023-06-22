function solution(star) {
    // 공백 생성
    let gap = ' ';

    for (let i = 1; i <= star; i++) {
        // 양쪽 공백의 갯수 = 정수 n - 해당 줄의 index
        // 예시
        // n = 3, 해당 줄이 첫줄인 경우
        // '  *  ' --> 양쪽 공백은 2개씩 = 3 - 1
        let gap_number = star - i;

        // 중앙 별의 갯수 = (2 * i) - 1
        // 줄이 추가될 수록 2개씩 늘어난다.
        let star_number = 2 * i - 1;

        // 줄마다 출력
        console.log(gap.repeat(gap_number) + '*'.repeat(star_number) + gap.repeat(gap_number));
    }
}

let star = 9;
solution(star);
