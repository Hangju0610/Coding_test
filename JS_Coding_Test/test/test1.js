function solution(n) {
    let result = String(n) // 배열로 만들기 위해 문자열로 타입 변환
        .split('') // split을 통해 배열로 만들기
        .reverse() // reverse 메소드를 통해 배열 뒤집기
        .reduce((acc, cur) => acc + Number(cur), 0); // reduce 메소드를 통해 각 배열을 더해준다
    // 이때 배열의 원소들은 문자열로 저장되어 있으므로, Number를 사용하여 숫자형으로 타입 변환

    return result;
}

n = 718253;
solution(n);
