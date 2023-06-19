function solution(s) {
    // 변수 설정
    let answer;
    // 중앙값을 계산해준다. 0.5가 반환될 수 있으니 Math.floor를 써준다.
    let center = Math.floor(s.length / 2);
    // 콘솔로 center값 찍어보기
    console.log(center);

    // 조건식 설정
    if (s.length % 2) {
        answer = s.slice(center, center + 1);
    } else {
        answer = s.slice(center - 1, center + 1);
    }
    return answer;
}
