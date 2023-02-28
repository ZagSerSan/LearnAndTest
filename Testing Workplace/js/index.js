//TODO ========= 1й Модуль ==============


const date = new Date(Date.now() + 5000)
const days = 12;
console.log('date:', date);
console.log('days:', days);

function addDays(date, days) {
  return new Date(date.getTime() + days*24*60*60*1000)
}

console.log('addDays:', addDays(date, days));















