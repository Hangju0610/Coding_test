const fs = require("fs");
// 알파벳 정렬하기
let alphabet = ['A','B','C','D','E','F','G','H','I','J','K',"L","M","N","O","P","Q","R",'S','T','U','V','W','X',"Y","Z"];
// 카이사르 랜덤 수 지정
let random = 10
// map 메소드를 이용하여 정렬
// v : 알파벳 , idx : v 알파벳의 idx, 
// idx + random 수를 더한 후, 26보다 작으면, V + 알파벳, 26보다 크면 -26을 하여 다시 A부터 출력할 수 있도록 제작
let a = alphabet.map((v,idx) => idx+random < 26 ? v + alphabet[idx+random] : v + alphabet[idx+random-26])

// 파일 쓰기
for (i = 0; i<26; i++) {
   fs.writeFileSync(`chal_test/${a[i]}`,'와하하하하하하하하하항', 'utf-8')
}

