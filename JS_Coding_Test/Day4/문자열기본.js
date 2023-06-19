
// 4 혹은 6인것을 범위가 4 와 6사이로 봤다.
function solution(s) {
   if (s.length >= 4 && s.length <= 6) {
       if (s.match(/[a-z]/ig) === null) return true
   }
   return false
}

console.log(solution("12345"))
