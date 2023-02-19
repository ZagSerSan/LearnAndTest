//TODO ========= 1й Модуль ==============

console.log('----------------- Задание #1 -------------------')

const coffees = ['Latte', 'Cappuccino', 'Americano'];
let coffeeName = prompt('Поиск кофе по названию:', 'Latte, Cappuccino, Americano').trim().toLowerCase(); 

let index = coffees.findIndex(item => {
   return item.toLowerCase() === coffeeName;
});

if (index >= 0) {
   alert(`Держите ваш любимый кофе ${coffees[index]}. Он ${index+1}-й по популярности в нашей кофейне.`)
} else {
   alert('К сожалению, такого вида кофе нет в наличии.');
}


