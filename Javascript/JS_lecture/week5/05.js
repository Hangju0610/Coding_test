// 상속
// Class -> 유산으로 내려주는 주요 기능!!
// 부모 <-> 자식

// 동물 전체에 대한 클래스

class Animal {
   // 생성자
   constructor(name) {
      this.name = name;
   }

   speak() {
      console.log(`${this.name} make a noise.`);
   }
}

class Dog extends Animal {
   // 부모에서 내려받은 메서드를 재 정의할 수 있음
   // = overriding...
   speak(){
      console.log(`${this.name} barks.`);
   }
}

const max = new Dog('Max');

max.speak()