// // 과거의 흔적
// function solution(s){
//    let p = 0;
//    let y = 0;
//    let a = s.toLowerCase();
//    let answer = true
//    for (let i in a){
//    if (a[i] === "p"){
//        p++;
//    } else if (a[i] === "y"){
//        y++;
//    }
//    if (p === y){
//        answer = true
//    } else {
//        answer = false
//    }
// }
//    return answer;
//}


// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function numPY(s){
  //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )
console.log( numPY("ssssssS") )
