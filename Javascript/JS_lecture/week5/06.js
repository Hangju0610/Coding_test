// 새로운 Car class 정의
class Car {
   constructor(modelName, modelYear, type, price) {
     this.modelName = modelName;
     this.modelYear = modelYear;
     this.type = type;
     this.price = price;
   }
 
   // 클락션을 울리는 메서드
   makeNoise() {
     console.log(`${this.modelName}: 빵!`);
   }
   printModelYear() {
      console.log(this.modelYear + "년도 모델입니다.")
   }
}

// 전기차 Class 정의
class ElectronicCar extends Car {
   constructor(modelName, modelYear, price, chargeTime){
      // Car(부모 Class)에게도 알려주기!!
      // super => 부모의 constructor를 뜻함
      // 일렉트로닉카와 카의 싱크를 맞추기 위해 넣어준다.
      super(modelName, modelYear, "e", price)
      this._chargeTime = chargeTime
   }

   set chargeTime (value) {
      this._chargeTime = value
   }

   get chargeTime () {
      return this._chargeTime

   }
}
 
 // 자동차 만들기
//  const car1 = new Car("Sorento", "2023", "e", 5000);
//  const car2 = new Car("SM5", "1999", "g", 3000);
//  const car3 = new Car("QM6", "2010", "g", 4500);
//  car1.makeNoise();
//  car2.makeNoise();
//  car3.makeNoise();

const eleCar1 = new ElectronicCar("뉴아이오닉5", "2023", 7000, 60);

eleCar1.makeNoise()
eleCar1.printModelYear()
console.log(eleCar1.chargeTime);
eleCar1.chargeTime = 20;
console.log(eleCar1.chargeTime);