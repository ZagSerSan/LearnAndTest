// this

const test = {
   cost: 200,
   func: function() {
      return this.cost;
   }
};

console.log(test.func());