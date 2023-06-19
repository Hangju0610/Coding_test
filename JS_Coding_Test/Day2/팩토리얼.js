function solution(n) {
   let j = 0;
   let i = 1;
   while (i <= n) {
      // j == 1로 추가
       j++
       i = i*j
   }
   // 
   return (j-1);
}