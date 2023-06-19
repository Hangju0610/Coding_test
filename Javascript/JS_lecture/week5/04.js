// Getters와 Setters (프로퍼티에 접근하고 세팅하기 위한)
// 객체지향 프로그래밍 언어 -> G, S
// 클래스 --> 객체(인스턴스)
// 프로퍼티(constructor)
// new Class(a, b, c)

class Rectangle {
   constructor (height, width) {
      // underscore : private(은밀하고, 감춰야 할 때)
      this._height = height;  // this 앞에 _는 약속이다. 안그러면 무한 루프에 걸린다.
      this._width = width;
   }

   // width를 위한 getter
   get width(){
      return this._width;
   }

   // width를 위한 setter
   set width(value) {
      // 검증 1 : value가 음수이면 오류!
      if (value <= 0) {
        //
        console.log("[오류] 가로길이는 0보다 커야 합니다!");
        return;
      } else if (typeof value !== "number") {
        console.log("[오류] 가로길이로 입력된 값이 숫자타입이 아닙니다!");
        return;
      }
      this._width = value;
    }

   get height () {
      return this._height;
   }

   // 세터는 방법을 함수 형태로 쓸 수 있으며, 검증할 수 있다.(ex height가 음수인 경우)
   set height(value) {
      // 검증 1 : value가 음수이면 오류!
      if (value <= 0) {
        //
        console.log("[오류] 세로길이는 0보다 커야 합니다!");
        return;
      } else if (typeof value !== "number") {
        console.log("[오류] 세로길이로 입력된 값이 숫자타입이 아닙니다!");
        return;
      }
      this._height = value;
    }

    getArea() {
      const a = this._width * this._height;
      console.log(`넓이는 => ${a}입니다.`);
    }

}

const rect1 = new Rectangle(10, 7);
// const rect2 = new Rectangle(10, 30);
// const rect3 = new Rectangle(15, 20);

// rect1.getArea()

// getter 예시
console.log(rect1.width); // 10

// setter 예시
rect1.width = 20;
console.log(rect1.width); // 20