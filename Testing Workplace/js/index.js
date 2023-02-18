//TODO ========= 1й Модуль ==============

console.log('----------------- Задание #1 -------------------')

function filter_list(array) {
   let newArray = array.filter(item => {
      return typeof item === 'number';
   });
   return newArray;
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));




