//TODO ========= 1й Модуль ==============

function getDateFormat(date, separator) {
  date = new Date(date);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  if (day < 10) {
    day = `0${String(day)}`;
  }
  if (month < 10) {
    month = `0${String(month)}`;
  }

  let arr = [day, month, year];
  console.log(arr);

  if (separator === '-') {
    return arr.join(separator);
  } else {
    return arr.join('.');
  }
}

// const date = Date.now();
const date = new Date('Februery 5, 2001');
const separator = '-';

// console.log(getDateFormat(date));
console.log(getDateFormat(date,separator));





















