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
alert(styles.shift());
styles.unshift("Rap", "Reggae");
alert(styles.pop());

//question 4


function camelize(str) {
  return str
    .split('-')
    .map(

      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');

}

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
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };

//question 6

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (matching values)

        //question 7

        let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more

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

messages.shift(); //message[1]

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

alert(sumSalaries(salaries)); 


//question 10

const salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
  };

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

  alert(topSalary(salaries)); // Pete

//question 11

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
  alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));

  






