// function fetchData() {
//     return new Promise((resolve, reject) => {
//         const success = false;
//         if (success) {
//             resolve('성공');
//         } else {
//             reject('실패');
//         }
//     });
// }

// fetchData()
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response1) => response1.json())
//     .then((json1) => console.log(json1))
//     .then(() => fetch('https://jsonplaceholder.typicode.com/todos/2'))
//     .then((response2) => response2.json())
//     .then((json2) => console.log(json2))
//     .catch((error) => {
//         console.log(error);
//     })
//     .fanally(() => {
//         console.log('작업 끝!');
//     });

async function makeRequests() {
    try {
        console.log('fetch 전');
        const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json1 = await response1.json();
        console.log('json1 전');
        console.log(json1);
        console.log('json1 후');
    } catch (error) {
        console.log(error);
    } finally {
        console.log('작업 끝');
    }
}
console.log('before abc');
makeRequests();
console.log('after abc');

// var obj = {
//     vals: [1, 2, 3],
//     logValues: function (v, i) {
//         console.log(this, v, i);
//     },
// };

// //method로써 호출
// obj.logValues(1, 2);

//callback => obj를 this로 하는 메서드를 그대로 전달한게 아니에요
//단지, obj.logValues가 가리키는 함수만 전달한거에요(obj 객체와는 연관이 없습니다)
// [4, 5, 6].forEach(obj.logValues);

// const myPromise = new Promise((resolve, reject) => {
//     // 비동기 작업 수행
//     // 성공 시 resolve() 호출, 실패 시 reject() 호출
//   });

//   myPromise.then((result) => {
//     // 이행 상태 처리
//   }).catch((error) => {
//     // 거부 상태 처리
//   }).finally(() => {
//     // 항상 실행되는 처리
//   });
