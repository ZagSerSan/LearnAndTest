//TODO ========= 1й Модуль ==============

class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
    this.keys = [];
  }
  add(word, description) {
    if (this.keys.some(item => {return item === word})) {
      console.log(`Слово '${word}' уже есть!`);
    } else {
      // console.log(this.keys);
      this.words[word] = {
        word: word,
        description: description
      }
    }
    this.keys = Object.keys(this.words);
  }
}

const obj = new Dictionary('словарь');

obj.add('js', 'язык программирования')
obj.add('css', 'таблицы стилей')
obj.add('html', 'язык разметки')
obj.add('html', 'язык разметки 2')

console.log(obj);






