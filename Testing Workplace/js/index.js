//TODO ========= 1й Модуль - 6. Введение в основы JavaScript ==============

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














