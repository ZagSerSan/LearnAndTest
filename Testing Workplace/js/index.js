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
*/

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















