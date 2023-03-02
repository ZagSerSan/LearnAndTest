//TODO ========= 1й Модуль ==============

class Man {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello, i am ${this.name}`);
  }
}

class Woman extends Man {
  constructor(type, category) {
    super(type, category);
  }
  sayHello() {
    console.log(`Hello, i am ${this.name}, i'm woman.`);
  }
}

class Anyclass {};

const man1 = new Man('Alex', 34);
const man2 = new Man('John', 23);
const woman = new Woman('Jana', 12)

man1.sayHello();
man2.sayHello();
woman.sayHello();

console.log(man1 instanceof Man);
console.log(woman instanceof Man);
console.log(woman instanceof Anyclass);








