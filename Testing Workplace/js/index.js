//TODO ========= 1й Модуль ==============


const orders = [4, 2, 1, 3];
const patients = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];

function giveTalonsInOrder(patients, orders) {
  // новый массив для эл-в с новым порядком
  const newArray = [];

  // получение текущего индекса нового порядка
  let index = 0;
  for (number of orders) {
    index = number;
    // console.log(index);
    
    // заполнение нового массива посредством тек. индекса
    newArray.push(patients.find(item => {
      return item.id === index;
    }));
  }
  // возвращение массива с новым порядком
  return newArray;
}

const result = giveTalonsInOrder(patients, orders)
console.log('result', result);





































































