const fs = require('fs')

const data = "Spring Out\nNode In\nReact OK"

fs.writeFileSync("sample.txt", data);

fs.readFile("sample.txt","utf-8", (err, data) =>{
   if (err) console.log("파일을 못찾겠네요??")
   console.log(data)
   let a = data.split('\n').map((v,idx) => {
      return (idx + 1) + ' ' + v
   });
   console.log(a)
})