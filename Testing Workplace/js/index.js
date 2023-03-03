//TODO ========= 1й Модуль ==============

class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
    this.keys = [];

    //todo --------------------
    // this.keysAndValue = [];
    /*
      тут можно написать массив, который будет содержать ключи и значение,
      и в предыдущий выводить просто ключи, а в массив для вывода всех слов выводить ключ и значение.
     */

  }
  add(word, description) {
    // проверка на наличие такого слова
    if (this.keys.some(item => {return item === word})) {
      console.log(`Слово '${word}' уже есть!`);
    } else {
      // добавление слова в words, если такого не было при проверке
      this.words[word] = {
        word: word,
        description: description
      }
      console.log(`Слово '${word}' добавлено.`);
    }
    // массив ключей words, для провекри наличия слова
    this.keys = Object.keys(this.words);
    //todo
    // this.keysAndValue = Object.entries(this.words);
    // console.log(...this.keysAndValue);
  }
  remove(word) {
    // проверка на наличие такого слова
    if (this.keys.some(item => {return item === word})) {
      // удаление слова из объекта
      delete this.words[word];
      // удаление их массива наличия посредством индекса
      let indexArr = this.keys.findIndex(item => {return item === word});
      this.keys.splice(indexArr,1);

      console.log(`Слово '${word}' удалено.`);
    } else {
      console.log(`Слова '${word}' не существует.`);
    }
  }
  get(word) {
    // проверка на наличие такого слова
    if (this.keys.some(item => {return item === word})) {
      return this.words[word];
    } else {
      console.log(`Слова '${word}' не найдено...`);
    }
    return this.words
  }
  showAllWords() {
    let arr = [];
      Object.entries(this.words).forEach(arr => 
        console.log(`${arr[1].word}: ${arr[1].description}`)
      );
    return this.words;
  }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

dictionary.remove('JavaScript');
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает // и дополняет существующие
console.log(dictionary);


/**
const dictionary = new Dictionary('словарь');
// dictionary.add('JavaScript', 'популярный язык программирования');
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

// add()
dictionary.add('js', 'язык программирования')
dictionary.add('css', 'таблицы стилей')
dictionary.add('html', 'язык разметки')
dictionary.add('html', 'язык разметки 2')

// remove()
dictionary.remove('html')
dictionary.remove('html')

// get()
console.log(dictionary.get('js'));
console.log(dictionary.get('html'));

console.log(`------------------`);
dictionary.showAllWords();

console.log(dictionary);
 */






