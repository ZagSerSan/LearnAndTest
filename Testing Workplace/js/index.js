//TODO ========= 1й Модуль ==============

const student = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
}

// get, add, delete
function handleObject(obj, key, action) {
  if (action === 'get') {
    return obj[key];
  }
  if (action === 'add') {
    obj[key] = ''
    return obj;
  }
  if (action === 'delete') {
    delete obj[key];
    return obj;
  } else {
    return obj;
  }
}

// console.log(handleObject(student, 'programmingLanguage', 'get'));
// console.log(handleObject(student, 'programmingLanguage', 'add'));
// console.log(handleObject(student, 'programmingLanguage', 'delete'));
// console.log(handleObject(student, 'programmingLanguage', 'any value'));

const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result:', result); // { name: 'Maxim' }



























































