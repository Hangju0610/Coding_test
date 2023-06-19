// 자바 스크립트는 class도 있지만, Prototype을 사용하며 작동한다.
// 부모 클래스에서 객체가 상속하며 받아온다.

// class Person {
//    constructor(name, email, birthday) {
//    // constructor는 인스턴스의 생성과 동시에 클래스 필드의 생성과 초기화를 실행합니다.
//    // constructor은 생략할 수 있습니다.
//    // 생성과 동시에 실행
//    // this는 클래스가 생성할 인스턴스를 가리킵니다.
//    this.name = name;
//    this.email = email;
//    this.birthday = new Date(birthday);
//    }

//    // 메소드 생성하기.

//    introduce() {
//       return `Hello my name is ${this.name}`;
//    }

//    // 정적 메소드
//    // 클래스 함수 자체에 메서드를 설정할 수도 있습니다.
//    // this.name 같은 것을 안 쓰는 독립적인 것을 정의할 때 static을 사용하며
//    // 이 static 메서드를 사용할때는 인스턴스가 아닌 클래스 이름을 이용해서 사용.
//    // prototype에도 없고, 인스턴스에도 없다.
//    // class Person 안에 있다.

//    static multiplenNumber(x,y){
//       return x * y;
//    }
// }

// // constructor()는 new에 의해 자동으로 호출됩니다.
// // 객체 생성
// // new를 통해서 constructor 생성 -> john을 생성할 때 class 필드에 들어간 걸 초기화를 다 해준다.

// const john = new Person ('John', 'john@abc.com', '10-3-98');
// console.log(john)

// 생성자 함수로 만들면은
// 생성된 객체 내에 함수가 존재한다.
// 따라서 prototype안에 메소드를 생성해줘서 주소를 만들어준다.

// 그러나 class는 메소드를 생성해주면, prototype 안에 바로 생성된다.
// 모든 prototype : 객체면 prototype.

class Person {
   constructor(name,email) {
      this.name = name;
      this.email = email;
   }

   introduce() {
      return `Hello my name is ${this.name}`;
   }
}

class Client extends Person {
   constructor(name, email, phone, address) {
      super(name, email)

      this.phone = phone;
      this.address = address;
   }
}

const john = new Client('John', 'john@aa.a', '010-0000-0000','서울');
console.log(john.introduce());

// super
// 자식 클래스 내에서 부모 클래스의 생성자를 호출할 때 사용됩니다.
// 자식 클래스 내에서 부모 클래스의 메소드를 호출할 때 사용됩니다.

