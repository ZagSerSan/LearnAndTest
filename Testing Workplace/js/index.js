//TODO ========= 1й Модуль ==============

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


























