// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function multiFunc(x) {
  return function(y) {
    return x * y;
  }
}

const by5 = multiFunc(5);
const by10 = multiFunc(10);

console.log(by10(2));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    return count += 1;
  }
};

const newCounter = counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
 
  return {
    'counter' : 0,
    'increment' : function() {
      return this.counter += 1;
    },
    'decrement' : function() {
      return this.counter -= 1;
    }
  }

}

const masYMenos = counterFactory();
console.log(masYMenos.increment());
console.log(masYMenos.increment());
console.log(masYMenos.decrement());
