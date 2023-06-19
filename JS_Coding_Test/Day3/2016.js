// function solution(a, b) {
//    let Month_days = [31,29,31,30,31,30,31,31,30,31,30,31];
//    let days = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
//    let total_days = 0;
//    let day_choice

//    for (let i = 0; i < a-1; i++){
//       total_days += Month_days[i]
//   }
//    total_days += b
//    console.log(total_days)
//    day_choice = total_days % 7
//    return days[day_choice]
// }

// let sibal = solution(5, 24)
// console.log(sibal)

// 돌아가지가 않네, ChatGPT한테 물어보니
// 반복문 조건 안에 a가 ++ 되고 있었다.

function solution(a, b) {
   // 2016년도 달을 전부 작성
   //                1  2  3  4  5  6  7 ....
   //                0  1  2  3  4  5  
   let Month_days = [31,29,31,30,31,30,31,31,30,31,30,31];
   // 왜 목요일부터 했는가?
   // 1월 1일이 금요일
   // 1월 7일은? 목요일
   // 그렇다면, total_day = 7
   // 7 % 7 = 이 나와야 하고, 그렇다면, 0번째는 목요일이 나와야함.
   let days = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
   let total_days = 0;
   let day_choice


   // 1월인 경우
   // 이 반복문이 돌아가면 안되겠죠?
   // a = 1
   // 각 월의 일 수를 더해준다.
   for (let i = 0; i < a-1; i++){
      total_days += Month_days[i]
   }
   // 나머지 일수 (b) 132, 123
   total_days += b
   // 총 일수 나누기 7 한거의 나머지 -> Day의 배열에 인덱스로 쓰겠다.
   // 2가
   // 7보다 작음 0 ~ 6
   day_choice = total_days % 7
   return days[day_choice]
}



let sibal = solution(1, 11)
console.log(sibal)

//  data 메소드 사용한 풀이
// 알고리즘 문제가 아닌것 같다
function getDayName(a,b){
   var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
   var date = new Date(`2016-${a}-${b}`);
 var day = date.getDay()
   return arr[day];
}