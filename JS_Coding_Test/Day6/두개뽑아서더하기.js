function sumArray(numbers) {
    let a = [];
    let b = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            a.push(numbers[i] + numbers[j]);
        }
    }
    let sum = new Set(a);
    sum.forEach((e) => b.push(e));
    return b.sort((a, b) => b - a);
}

sumArray([2, 1, 3, 4, 1]);
