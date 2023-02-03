//TODO ========= 1й Модуль - 5.Работа со строками ==============
/* 
console.log('----------------- Задание #1 -------------------')

const myName = 'Сегрей';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилена Минина';
const reasonText = 'хочу изменить свою жизнь';
const numberOfMonth = 12;

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;

console.log(myInfoText);


console.log('----------------- Задание #2 -------------------')

myInfoText = myInfoText.replaceAll('JavaScript', 'javascript');
myInfoText = myInfoText.replaceAll('курс', 'КУРС');
console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0], myInfoText[(myInfoText.length - 1)]);


console.log('----------------- Задание #3 -------------------')

let userName = prompt('Как вас зовут?');
userName = (userName.toUpperCase()).trim();
console.log(userName);
alert(`Вас зовут ${userName}.`)


console.log('----------------- Задание #4 -------------------')

let userAge = prompt('Сколько вам лет?');
userAge = Number((userAge).trim());
alert(`Вас зовут ${userName} и вам ${userAge} лет.`);


console.log('----------------- Задание #5 -------------------')

let userString = (prompt('Введите текст для обрезки:')).trim();
let startSliceIndex = Number(prompt('Введите индекс, с которого нужно начать обрезку строки:'));
let endSliceIndex = Number(prompt('Введите индекс, которым нужно закончить обрезку строки:'));

let string = (userString.slice(startSliceIndex, endSliceIndex)).trim();
alert(string);

*/
console.log('----------------- Задание #6 -------------------')

let userText = (prompt('Введите текст:')).trim();
let wordFromText = (prompt('Введите слово из текста:')).trim();

indexOfWord = userText.indexOf(wordFromText);

let string = userText.slice(0, indexOfWord);
alert(`Результат: ${string}`);

/*
Обрезка осуществляется здесь, дальше ничего нету.
*/




