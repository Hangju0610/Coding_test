function solution(arr) {
   // reduce를 더해서 다 더해준 후, 배열의 길이만큼 나누면 평균값
   return (arr.reduce((acc,cur) => acc + cur))/(arr.length);
}