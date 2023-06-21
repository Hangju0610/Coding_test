function solution(s, n) {
    let upperAlphabet = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ];
    let lowerAlphabet = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];
    var answer = s.split('');
    for (let i = 0; i < answer.length; i++) {
        index = answer[i];
        upper_index = upperAlphabet.indexOf(index);
        lower_index = lowerAlphabet.indexOf(index);
        if (upper_index > lower_index) {
            answer = answer.replace(
                index,
                upperAlphabet[upper_index + n < 26 ? upper_index + n : upper_index + n - 26]
            );
        } else {
            answer = answer.replace(
                index,
                lowerAlphabet[lower_index + n < 26 ? lower_index + n : lower_index + n - 26]
            );
        }
    }
    return answer.join('');
}

console.log(solution('AbCd', 2));
