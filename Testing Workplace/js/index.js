//TODO ========= 1й Модуль - 6. Введение в основы JavaScript ==============
/*
console.log('----------------- Задание #1 -------------------')
// https://codepen.io/ZagSerSan/pen/MWBRgrJ

let existingUserLogin = 'the_best_user';
let existingUserPassword = 12345678;

let userLogin = prompt('Введите логин:').trim();
let userPassword = Number(prompt('Введите пароль:').trim());

console.log(userLogin);
console.log(userPassword);

// let message = “”

if (userLogin === existingUserLogin && userPassword === existingUserPassword) {
   alert(`Добро пожаловать, ${userLogin}!`);
} else {
   alert('Логин и (или) Пароль введены неверно!');
}
*/

console.log('----------------- Задание #2 -------------------')
// Вопросы
let question_1 = '1. Сколько будет 2 + 2?'; 
let question_2 = '2. Сколько будет 2 * 2?'; 
let question_3 = '3. Сколько будет 2 + 2 * 2?'; 
let question_4 = '4. У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'; 
let question_5 = '5. У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'; 

// Правильные ответы
let answer_1 = 4;
let answer_2 = 4;
let answer_3 = 6;
let answer_4 = 1;
let answer_5 = 12;

let correctAnswers = 0;
let incorrectAnswers = 0;

let userAnswer_1 = Number(prompt(question_1).trim());
if (userAnswer_1 === answer_1) {
   alert('Ответ Верный!');
   correctAnswers += 1;
} else {
   alert('Ответ Неверный!');
   incorrectAnswers += 1;
}

let userAnswer_2 = Number(prompt(question_2).trim());
if (userAnswer_2 === answer_2) {
   alert('Ответ Верный!');
   correctAnswers += 1;
} else {
   alert('Ответ Неверный!');
   incorrectAnswers += 1;
}

let userAnswer_3 = Number(prompt(question_3).trim());
if (userAnswer_3 === answer_3) {
   alert('Ответ Верный!');
   correctAnswers += 1;
} else {
   alert('Ответ Неверный!');
   incorrectAnswers += 1;
}
  
let userAnswer_4 = Number(prompt(question_4).trim());
if (userAnswer_4 === answer_4) {
   alert('Ответ Верный!');
   correctAnswers += 1;
} else {
   alert('Ответ Неверный!');
   incorrectAnswers += 1;
}

let userAnswer_5 = Number(prompt(question_5).trim());
if (userAnswer_5 === answer_5) {
   alert('Ответ Верный!');
   correctAnswers += 1;
} else {
   alert('Ответ Неверный!');
   incorrectAnswers += 1;
}

// Конечный результат
alert(`Конец теста! Правильных ответов: ${correctAnswers}, неправильных ответов: ${incorrectAnswers}.`)









