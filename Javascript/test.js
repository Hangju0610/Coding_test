function solution(seoul) {
   let answer = ''
   for (let i = 0; i < seoul.length; i++) {
      console.log(typeof i)
      if (seoul[i] == "Kim") {
         console.log(typeof i)
         answer = `김서방이 ${i}에 있다.`
      }
   }
   return answer
}

let seuol = ["Kim","Jane", "Park"]	
console.log(solution(seuol));