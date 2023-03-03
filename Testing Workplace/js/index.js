//TODO ========= 1й Модуль ==============

class Developer {
  #privateValue

  constructor(name) {
    this.name = name,
    this.#privateValue = 'js'
  }

  get getPrivate() {
    return this.#privateValue
  }
  set setPrivate(newValue) {
    return this.#privateValue = newValue
  }

  sayHallo() {
    console.log('Hello!');
  }
}

const mainDeveloper = new Developer('Сергей', 'JavaScript')
console.log(mainDeveloper);
console.log(mainDeveloper.getPrivate);
console.log(mainDeveloper.setPrivate = 'css');
console.log('get:', mainDeveloper.getPrivate);







