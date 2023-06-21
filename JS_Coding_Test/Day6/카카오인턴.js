function solution(s) {
    let eng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let a = s;
    for (let i = 0; i < eng.length; i++) {
        a = a.replaceAll(eng[i], i);
    }
    return Number(a);
}
