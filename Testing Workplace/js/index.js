//TODO ========= 1й Модуль ==============

const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

function giveJobToStudent(obj, jobName) {
  const updatedObject = {
    ...obj,
    job: jobName
  };
  alert(`Поздравляем! У студента ${updatedObject.fullName} появилась новая работа! Теперь он ${updatedObject.job}.`);
  return updatedObject;
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log(updatedStudent);

// console.log(student);


/*
updatedStudent = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    job: 'веб-разработчик',
}
*/

























































