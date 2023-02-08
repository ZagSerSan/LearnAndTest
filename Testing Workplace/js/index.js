//TODO ========= 1й Модуль - 6. Введение в основы JavaScript ==============

/*

console.log('----------------- Задание #1 -------------------')

let health = Number(prompt('Введите число параметра "здоровье" для персонажа').trim())
if (health <= 0 || !health) {
  alert('Параметр "здоровье" должен быть больше нуля!')
} else {
  alert(`Параметр "здоровье" равен ${health}`);
}

console.log('----------------- Задание #2 -------------------')

const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия').trim());
console.log(temperatureInCelsius);

if (temperatureInCelsius === 0) {
   alert('0 градусов по Цельсию - это температура замерзания воды.')
} else if (temperatureInCelsius > 0) {
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже.');
} else if (temperatureInCelsius < 0) {
   alert('Минусовая температура подходит для замерзания воды.');
}

const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
console.log(temperatureInCelsius);

if (!temperatureInCelsius && temperatureInCelsius !== 0) {
   alert('Введите число!')
} else if (!temperatureInCelsius && temperatureInCelsius === 0) {
   alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);
} else {
   alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);
}
console.log('!temperatureInCelsius: ', !temperatureInCelsius);
console.log('!temperatureInCelsius && temperatureInCelsius !== 0): ', !temperatureInCelsius && temperatureInCelsius !== 0);


console.log('----------------- Задание #3 -------------------')

const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0; // тип переменной был не определена
console.log(totalJuniorDevelopersSalary);
                
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
   const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
   totalJuniorDevelopersSalary += salaryWithTax;
   console.log(totalJuniorDevelopersSalary);
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
*/

console.log('----------------- Задание #4 -------------------')

let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = numbers[i] ** 3;
    sum += numbers[i];
} 
console.log(sum); // 1158411

// Через цикл for of
sum = 0;
for (let num of numbers){
   // возврат исходного числа в массиве
   num = Math.cbrt(num); 
   console.log(num);

   num = num ** 3;
   sum += num;
   console.log(num);
} 
console.log(sum); // 1158411

/*
   #1 https://codepen.io/ZagSerSan/pen/VwBOwPO?editors=0011
   #2 https://codepen.io/ZagSerSan/pen/RwBmNGK?editors=0011
   #3 https://codepen.io/ZagSerSan/pen/BaPeWRm?editors=0011
   #4 https://codepen.io/ZagSerSan/pen/eYjavEo?editors=0011
*/