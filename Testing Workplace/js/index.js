//TODO ========= 1й Модуль - 6. Введение в основы JavaScript ==============

/*
*/

console.log('----------------- Задание #1 -------------------')

let health = Number(prompt('Введите число параметра "здоровье" для персонажа').trim())
if (health <= 0 || !health) {
  alert('Параметр "здоровье" должен быть больше нуля!')
} else {
  alert(`Параметр "здоровье" равен ${health}`);
}

/*
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
*/



/*
   #1 https://codepen.io/ZagSerSan/pen/VwBOwPO?editors=0011
   #2 https://codepen.io/ZagSerSan/pen/RwBmNGK?editors=0011
   #3
   #4
   #5
*/