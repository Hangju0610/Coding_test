class Car {
   constructor(modelName, modelYear, type, price) {
      this._modelName = modelName;
      this._modelYear = modelYear;
      this._type = type;
      this._price = price;
   }
   get modelName() {
      return this._modelName
   }
   set modelName(value) {
      // 유효성 검사
      if (value.length <= 0) {
         console.log("[오류] 모델명이 입력되지 않았습니다. 확인해주세요!");
         return
      } else if (typeof value !== 'string'){
         console.log("[오류] 입력된 모델명이 문자형이 아닙니다!");
         return;
      }
      this._modelName = value;
   }

   get modelYear() {
      return this._modelYear
   }

   set modelYear (value) {
      if (value.length !== 4) {
         console.log("[오류] 입력된 년도가 4자리가 아닙니다.확인해주세요!");
         return;
      } else if (typeof value !== 'string') {
         console.log("[오류] 입력된 모델명이 문자형이 아닙니다!");
         return;
      }
      this._modelYear = value;
   }

   get type() {
      return this._type
   }

   set type(value) {
      if (value.length <= 0) {
         console.log("[오류] 타입이 입력되지 않았습니다. 확인해주세요!");
         return;
      } else if (value !== "g" && value !== "d" && value !== "e") {
         console.log("[오류] 입력된 타입이 잘못되었습니다. 확인해주세요!");
         return;
      }
      this._type = value;
   }

   get price () {
      return this._price
   }
   set price (value) {
      if (typeof value !== "number") {
         console.log("[오류] 가격으로 입력된 값이 숫자가 아닙니다. 확인해주세요!");
         return;
       } else if (value < "1000000") {
         console.log("[오류] 가격은 100만원보다 작을 수 없습니다. 확인해주세요!");
         return;
       }
       this._price = value;
   }

   makeNoise() {
      console.log(`${this.modelName}: 빵빵!`)
   }
   printModelYear() {
      console.log(this.modelYear + "년도 모델입니다.")
   }
}

const car1 = new Car("Sorento", "2023", "e", 5000);
const car2 = new Car("SM5", "1999", "g", 3000);
const car3 = new Car("QM6", "2010", "g", 4500);
// car1.makeNoise();
// car2.makeNoise();
// car3.makeNoise();
// car1.printModelYear();

// console.log(car1.type)

//getter 예시 왜인지 알아보자??
console.log(car1.modelName)
// setter 예시
car1.type = 'f';
console.log(car1.type)