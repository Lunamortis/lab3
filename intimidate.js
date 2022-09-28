//question 1

function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(ucFirst('john'));

//question 2

let str = truncate("What I'd like to tell on this topic is:", 20);
let num = 12;

function truncate(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}
console.log(truncate(str, num));

//question 3

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles.pop());
console.log(styles)

//question 4


function camelize(str) {
  return str
    .split('-')
    .map(

      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); 

}
console.log(camelize('border-left-width'))

//Question 5
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function (str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];
    //just had the brackets in the wrong place
    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

  let mycalc = new Calculator()
  console.log(mycalc.calculate("8 + 5"))
  console.log(mycalc.calculate("8 - 5"))
  mycalc.addMethod('*', (a,b) => a*b)
  mycalc.addMethod('/', (a,b) => a/b)
  console.log(mycalc.calculate("8 * 5"))
  console.log(mycalc.calculate("8 / 5"))

//question 6

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)
//works well but doesn't quite answer the question asking for filtering unique values?

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log( unique(strings) ); // Hare, Krishna, :-O


        //question 7

        let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys); // name, more

//question 8

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];


let readMessages = new WeakSet();

// how to  store two message have been read

readMessages.add(messages[0]);
readMessages.add(messages[1]);

// read the first message again

readMessages.add(messages[0]);

//Asking message 0 was read or not 
console.log('Read Message 0: '+ readMessages.has(messages[0])); //True

//messages.shift(); //message[1]

messages[0] = null
console.log('Read Message 0: '+ readMessages.has(messages[0])); //false, because weaksets dont keep unused references

//question 9

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(sumSalaries(salaries)); 


//question 10

// const salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
//   };

  function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }

  console.log(topSalary(salaries)); // Pete

//question 12 - 11 is missing?

let room = {
  number: 23
  };
  let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
  };
  // circular references
  room.occupiedBy = meetup;
  meetup.self = meetup;
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));

  //question 13
  class FormatError extends SyntaxError {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }
  
  let err = new FormatError("formatting error");
  
  console.log( err.message ); // formatting error
  console.log( err.name ); // FormatError
  console.log( err.stack ); // stack
  
  console.log( err instanceof SyntaxError ); // true
  
//question 13

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('runs after 3 seconds'));

//question 14`

async function loadJson(url) { // (1)
  let response = await fetch(url); // (2)

  if (response.status == 200) {
    let json = await response.json(); // (3)
    return json;
  }

  throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(console.log); // Error: 404 (4)





