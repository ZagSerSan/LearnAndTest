//TODO ========= 1й Модуль - 5.Работа со строками ==============

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






