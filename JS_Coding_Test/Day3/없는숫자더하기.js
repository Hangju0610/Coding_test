function solution(numbers) {
   // 0부터 9까지 배열 지정
   let all = [0,1,2,3,4,5,6,7,8,9]
   // 합계값 초기화
   let sum = 0;
   // all을 반복문 돌린 후, numbers 배열에 포함되어 있으면 0을 추가, 없으면 해당 value값 추가하기
   all.forEach(v => numbers.includes(v)? sum += 0: sum += v);
   return sum;
}