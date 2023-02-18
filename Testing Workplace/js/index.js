//TODO ========= 1й Модуль ==============

/** 

console.log('----------------- Задание #1 -------------------')

const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel() {
   let userName = peopleWaiting.shift();
   let length = peopleWaiting.length;
   if (userName === 'Кирилл') {
      userName += ', был последним клиентом, который'
   }
   alert(`${userName} получил(а) посылку. В очереди осталось ${length} человек.`);
   console.log(peopleWaiting);
}

function leaveQueueWithoutParcel() {
   let userName = peopleWaiting.pop();
   let length = peopleWaiting.length;
   alert(`${userName} не получил(а) посылку и ушел(ла) из очереди. В очереди осталось ${length} человек.`);
   console.log(peopleWaiting);
}

// 3 первых получили посылки:
giveParcel();
giveParcel();
giveParcel();

// Остальные уходят:
for (let i = peopleWaiting.length; i > 0; i--) {
   leaveQueueWithoutParcel()
}

console.log('----------------- Задание #2 -------------------')

const array = ['1', '2', '3', '4', '5'];

for (let i = 0; i < array.length; i++) {
   console.log(array[i] += '_edited');
}

console.log('----------------- Задание #3 -------------------')

const coffees = ['Latte', 'Cappuccino', 'Americano'];
let coffeeName = prompt('Поиск кофе по названию:').trim(); 

console.log(coffeeName);

let isContains = coffees.some(item => {
   return item.toLowerCase() === coffeeName.toLowerCase();
});
let index = coffees.findIndex(item => {
   return item.toLowerCase() === coffeeName.toLowerCase();
});
console.log(isContains);

if (isContains) {
   alert(`Держите ваш любимый кофе ${coffees[index]}. Он ${index+1}-й по популярности в нашей кофейне.`)
} else {
   alert('К сожалению, такого вида кофе нет в наличии.');
}

console.log('----------------- Задание #4 -------------------')

const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map(item => {
   // 0.5 не увеличивает цену, подставленно своё число: 1.5
   return item * 1.5;
});
console.log(updatedPrices);

coffees.forEach( (item, index) => {
   // let index = item.findIndex();
   alert(`Кофе ${item} сейчас стоит ${updatedPrices[index]} евро.`)
});

console.log('----------------- Задание #5 -------------------')

let clientsEstimations = [];

function askClientToGiveEstimation () {
   let userEstimation = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?').trim());

   if (userEstimation >= 1 && userEstimation <= 10) {
      clientsEstimations.push(userEstimation);
   }
   return clientsEstimations;
}

for (let i = 0; i < 5; i++) {
   askClientToGiveEstimation();
}
console.log('clientsEstimations', clientsEstimations);

let goodEstimations = clientsEstimations.filter(item => {
   return item > 5;
});
let notGoodEstimations = clientsEstimations.filter(item => {
   return item <= 5;
});

console.log('goodEstimations', goodEstimations);
console.log('notGoodEstimations', notGoodEstimations);

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}.`);
*/

console.log('----------------- Задание #6 -------------------')





