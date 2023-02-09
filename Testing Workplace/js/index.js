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

console.log('----------------- Задание #3 -------------------')


// let num = 102.3;
// console.log(Number.isInteger(num));



function getDivisorsCount(number) {
   let count = 0;

   if (!number || isNaN(Number(number))) {
      count = NaN;
   } else if (number < 0 || !Number.isInteger(number)) {
      alert(`'${number}' должен быть целым числом и больше нуля!`)
      count = NaN;
   }   else {
      for (let i = 0; i <= number; i++) {
         if (Number.isInteger(number / i)) {
            count += 1;
         }
      }
   }
   return count;
}
console.log(getDivisorsCount(4)); // 3
console.log(getDivisorsCount(5)); // 2
console.log(getDivisorsCount(12)); // 6
console.log(getDivisorsCount(30)); // 8
console.log(getDivisorsCount()); // NaN
console.log(getDivisorsCount('')); // NaN
console.log(getDivisorsCount('dasd')); // NaN
console.log(getDivisorsCount(36.23)); // alert
console.log(getDivisorsCount(-36.23)); // alert















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





