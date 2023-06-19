function solution(arr1, arr2) {
   // 반복돌리기
   // 행렬 arr1과 arr2는 행과 열 크기가 같음
   // 그렇다면 arr1에 arr2를 더해서 arr1을 출력하면 됨
   // 더하는 방법은 반복문 돌리기
   for (let i = 0; i < arr1.length; i++) {
       for (let j = 0; j < arr1[i].length; j++) {
           arr1[i][j] += arr2[i][j]
       }
   }
   return arr1;
}


// 다른 사람의 풀이
// Map 안에 map을 한번 더 써서 풀었다.
function sumMatrix(A,B){
   return A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2]));
}