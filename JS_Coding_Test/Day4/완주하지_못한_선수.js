// 참가자와 완주자를 sort로 정렬한다
// 반복문을 실행한다.
// 정렬한 참가자와 완주자 이름이 다른 경우, 참가자에 있는 사람이 낙오자가 된다.

function solution(participant, completion) {
   let i = 0;
   sort_part = participant.sort();
   sort_comp = completion.sort();
   while (i < participant.length) {
       if (sort_part[i] !== sort_comp[i]){
           return sort_part[i]
           break
       }
   i++
   }
}