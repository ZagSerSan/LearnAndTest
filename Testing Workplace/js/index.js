//TODO ========= 1й Модуль ==============

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


















