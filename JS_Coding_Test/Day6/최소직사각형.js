function solution(sizes) {
    let sort_size = sizes.map((v) => v.sort((a, b) => b - a));
    console.log(sort_size);
    let w = sort_size.reduce((acc, cur) => (acc < cur[0] ? cur[0] : acc), 0);
    let h = sort_size.reduce((acc, cur) => (acc < cur[1] ? cur[1] : acc), 0);
    console.log(w, h);
    return w * h;
}
