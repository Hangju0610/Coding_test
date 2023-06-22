function solution(arr1) {
    // 숫자 혹은 *을 받아들이기 위한 빈 배열
    let answer = [[], [], [], [], []];

    // 7*7을 통해 배열 입력
    // 행렬 index 값에 음수가 있는 경우 오류가 발생하므로 7*7로 만들어준다.
    // 5*5 배열을 정중앙에 두고, 가장자리를 0으로 채우는 전략
    let check = makeCheckArr(arr1);

    // 내부 5*5 배열 반복문을 실행
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
            // 상하 비교 조건문 (위보다 크고 아래보다 큰 경우)
            if (check[i][j] > check[i + 1][j] && check[i][j] > check[i - 1][j]) {
                // 좌우 비교 조건문 (좌우보다 큰 경우)
                if (check[i][j] > check[i][j + 1] && check[i][j] > check[i][j - 1]) {
                    // 상하좌우 모두 만족할 경우 '*'로 변경, 아닐 경우 동일한 수로 입력하기
                    answer[i - 1][j - 1] = '*';
                } else {
                    answer[i - 1][j - 1] = check[i][j];
                }
            } else {
                answer[i - 1][j - 1] = check[i][j];
            }
        }
    }
    // 문자열로 출력하기.
    // map을 통해 행은 공백으로 합치기 : join 메소드를 통해
    // 열은 join 메서드를 통해 개행으로 합치기
    let result = answer.map((v) => v.join(' ')).join('\n');
    console.log(result);
}

// 7*7 배열로 만들기
function makeCheckArr(arr) {
    let answer = arr;
    let zeros = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 5; i++) {
        // 행 좌우에 0 추가
        answer[i].unshift(0);
        answer[i].push(0);
    }
    // 맨 위 아래 0행 추가
    answer.unshift(zeros);
    answer.push(zeros);
    return answer;
}

let arr1 = [
    [7, 4, 6, 5, 9],
    [6, 1, 3, 4, 5],
    [4, 8, 5, 6, 9],
    [1, 3, 0, 6, 4],
    [6, 4, 8, 1, 7],
];

solution(arr1);
