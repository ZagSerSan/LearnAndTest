//TODO ========= 1й Модуль ==============

// технологии, которые нужно выучить и кол-во занятий:
const arraySkils = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
const numberОfСlasses = 5;
// const arraySkils = ["HTML", "CSS", "JavaScript", "React", "NodeJS", "VueJS", "AngularJS"];
// const numberОfСlasses = 7;

const student = {
  stack: ['HTML'],
  level: 1,
  improveLevel: function(arraySkils) {
    if (this.level < arraySkils.length) {
      this.stack.push(arraySkils[this.level]);
      this.level += 1;
    } else {
      alert('Студент выучил все технологии!');
    }
    // отслеживание процесса
    console.log(`level = ${this.level}`);
    console.log(this.stack);
    console.log(this);
    return this
  }
}
console.log(student);
for (i = 0; i < numberОfСlasses; i++) {
  student.improveLevel(arraySkils);  
}

/* Упрощённый вариант 

const student = {
  stack: ['HTML'],
  level: 1,
  improveLevel: function() {
    this.level += 1;

    if (this.level === 2) {
      this.stack.push('CSS');
    } else if (this.level === 3) {
      this.stack.push("JavaScript");
    } else if (this.level === 4) {
      this.stack.push('React');
    } else if (this.level === 5) {
      this.stack.push('NodeJS');
    } else if (this.level === 5) {
      this.stack.push('NodeJS');
    } else if (this.level > 5) {
      alert('Студент выучил все технологии!');
    }
    // отслеживание процесса
    console.log(`level = ${this.level}`);
    console.log(this.stack);
    console.log(this);
    return this
  }
}
student
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel();

*/
























