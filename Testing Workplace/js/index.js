//TODO ========= 1й Модуль ==============

/*

console.log('----------------- Задание #1 -------------------')

function getName1(name) {
   return `Имя равно ${name}`;
}

const getName2 =  function(name) {
   return `Имя равно ${name}`;
}

const getName3 = name => {
   return `Имя равно ${name}`;
}

console.log('getName1', getName1('Serhii'));
console.log('getName2', getName2('Serhii'));
console.log('getName3', getName3('Serhii'));
*/


console.log('----------------- Задание #2 -------------------')

function getSumOfNumbers(callback, number, type) {
   let sum = 0;

   callback(`Sum ${number} by ${type}:`);
  // logNum(`Sum ${number} by ${type}:`)
   for (let i = 0; i <= number; i++) {
      // определение type
      if (type === '') sum += i;
      if (type === 'even') {
         sum += i;
         i++;
      }
      if (type === 'odd' && i !== number) {
         sum += (i+1);
         i++;
      }
   }
   return sum;
}

const logNum = msg => console.log(msg);

console.log(getSumOfNumbers(logNum, 10, 'odd')); // 25
console.log(getSumOfNumbers(logNum, 10, 'even')); // 30
console.log(getSumOfNumbers(logNum, 10, '')); // 55


// console.log('----------------- Задание #3 -------------------')










