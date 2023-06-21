function solution(arr) {
    let b = arr.filter((v, idx) => {
        return v !== arr[idx + 1];
    });
    console.log(b);
    return b;
}

let a = [4, 4, 4, 3, 3];
solution(a);
