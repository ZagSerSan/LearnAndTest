//TODO ========= 1й Модуль ==============

function getDateFormat(date, separator) {
  date = new Date(date);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  let arr = [day, month, year];
  
  if (separator === '-') {
    return arr.join(separator);
  } else {
    return arr.join('.');
  }
}

const date = Date.now();
const separator = '-';

console.log(getDateFormat(date,separator));





















