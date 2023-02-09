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


console.log('----------------- Задание #2 -------------------')

function getSumOfNumbers(callback, number, type) {
   let sum = 0;

   callback(`Sum '${number}' by ${type}:`);
   number = Number(number);

   if (isNaN(number)) {
      sum = number;
   } else if (number === 0) {
      sum = NaN;
   } else {
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
   }
   return sum;
}
// callback
const logNum = msg => console.log(msg);

console.log(getSumOfNumbers(logNum, 10, 'odd')); // 25
console.log(getSumOfNumbers(logNum, 10, 'even')); // 30
console.log(getSumOfNumbers(logNum, 10, '')); // 55
*/

let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i] ** 3;
   //  console.log(numbers[i]);
}
console.log('Цикл for, sum =', sum); // 1158411
console.log(numbers); // без изменений

// Через цикл for of
sum = 0;
for (let num of numbers){
    sum += num ** 3;;
   //  console.log(num);
}
console.log('Цикл for of, sum =', sum); // 1158411
console.log(numbers); // без изменений


















// Через цикл for of
// sum = 0;
// for (let num of numbers){
//    sum += (Math.cbrt(num) ** 3);
//    console.log(num); // без изменений
// }
// console.log(sum); // 1158411
// console.log(numbers); // без изменений

/**
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
console.log('цикл for of: ', sum); // 1158411
 */





