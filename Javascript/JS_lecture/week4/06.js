var obj = {
	vals: [1, 2, 3],
	logValues: function(v, i) {
      console.log('>>> test start');
      if (this === global) {
         console.log('this가 글로벌입니다. ')
      } else {
         console.log(this, v, i);
      }
      console.log('>>> test end');
	}
};

//method로써 호출
obj.logValues(1, 2);

//callback => obj를 this로 하는 메서드를 그대로 전달한게 아니에요
//단지, obj.logValues가 가리키는 함수만 전달한거에요(obj 객체와는 연관이 없습니다)
// 결국 함수를 넣은거다 >> 따라서 this는 전역변수가 출력
[4, 5, 6].forEach(obj.logValues);