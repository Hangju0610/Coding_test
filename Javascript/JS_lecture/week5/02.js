// 클래스라는 설계도를 만들어봅시다.
class Person {
   // 우리는 사람이기 때문에 필수요소
   // name, age
   constructor (name, age) {
      this.name = name;
      this.age = age;
   }

   // 메서드 형태의 동사 표현
   // 인스턴트 자체는 this라고 했었음. >> this로 내부 값을 접근
   sayHello() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
   }

   sayAge() {
      console.log(`My Age is ${this.age} years old.`);
   }
}

// 설계도를 통해 인스턴스(실제 사물) 만들어봅시다!
// 이름은 홍길동이고, 나이는 30살인 사람 하나로 만들어줘!!!(설계도에 근거해서!)

// 왜 쓰냐?? 빠르고, 정확하게 많이 만들 수 있기 때문에.
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// person1.sayHello();
// person2.sayHello();