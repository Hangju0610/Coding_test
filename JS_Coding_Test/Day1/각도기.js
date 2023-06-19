// 내 풀이

function solution(angle) {
   if (angle<90) {
      return answer = 1
   } else if (angle === 90) {
      return answer = 2
   } else if (angle > 90 && angle < 180){
      return answer = 3
   } else {
      return answer = 4
   }
}

// 다른 사람의 풀이

function solution(angle) {
   return [0, 90, 91, 180].filter(x => angle>=x).length;
}
