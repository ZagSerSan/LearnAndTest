//TODO ========= 1й Модуль ==============

const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
     return 'Гав-Гав';
  }
}

const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
     return 'Чик-чирик';
  }
}

function makeDomestic(isDomestic) {
  this.isDomestic = isDomestic;
  const sound = this.makeSound();
  console.log(`${this.type} по имени ${this.name} говорит ${sound}`);
  return this
}

console.log(makeDomestic.bind(dog, true)());

console.log(makeDomestic.call(bird, false));
console.log(makeDomestic.apply(bird, [false]));


















