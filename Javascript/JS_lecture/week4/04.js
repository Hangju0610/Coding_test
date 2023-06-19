// map 함수에 의해 새로운 배열을 생성해서 newArr에 담고 있네요!

// index, cur -> 사람이 이해할 수 있는 변수명일 뿐
// 컴터가 이해하는건 자리에 따른 값
var newArr2 = [10, 20, 30].map(function (index, currentValue) {
	console.log(index, currentValue);
	return currentValue + 5;
});
console.log(newArr2);

// -- 실행 결과 --
// 10 0
// 20 1
// 30 2
// [ 5, 6, 7 ]