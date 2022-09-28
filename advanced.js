import promptSync from 'prompt-sync' 
const prompt = promptSync();

//question 1

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // ?
console.log(counter2()); // ?

//0,1 is the answer, because the function is called twice, and the count is incremented by 1 each time.

//question 2

function sum(a) {
    return function (b) {
        return a + b; // takes "a" from the outer lexical environment
    };
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4

//question 3

function makeCounter2() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}

let counter3 = makeCounter2()
console.log(counter3())
console.log(counter3.set(5))
console.log(counter3())
console.log(counter3.decrease())

//question 3

function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        console.log('pn: '+current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

// usage:
printNumbers(5, 10);

//Nested

function printNumbersNested(from, to) {
    let current = from;

    setTimeout(function go() {
        console.log('pnn: '+current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

printNumbersNested(2,4)



//question 4

//question 5


function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    login(result) {
        console.log(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));

//question 6

let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);

// no speed differnce

//basic benchmarking. runs the same operation lots of times, tests how long it took by saving the Date (in milliseconds) before and after
let pocketsTestStart = new Date();
for (let i = 0; i < 1000000; i++)
{
    let glasses = pockets.glasses;
}
let pocketsTestTime = (new Date()) - pocketsTestStart;

let headTestStart = new Date();
for (let i = 0; i < 1000000; i++)
{
    let glasses = head.glasses;
}
let headTestTime = (new Date()) - headTestStart;

console.log(pocketsTestTime)
console.log(headTestTime)
console.log(pocketsTestTime > headTestTime ? 'head.glasses is quicker' : 'pockets.glasses is quicker')

//question 7

//let obj2 = new obj.constructor();

//cottect

function User(name) {
    this.name = name;
}

  user = new User('John');
 let user2 = new user.constructor('Pete');

console.log(user2.name);

//wrong
User.prototype = {}; // (*)

 user = new User('John');
 user2 = new user.constructor('Pete');

console.log(user2.name);

//question 8

function f(a, b) {
    console.log(a + b);
}


Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};

// check it
f.defer(1000)(1, 2);

//question 9

let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
    console.log(key);
}

console.log(dictionary+'');

//question 10


//10. Extended Clock

class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
console.log('\nQuestion 10:\n-----------')

class ExtendedClock extends Clock {
    constructor(options) {
      super(options);

      let precision = options.precision ? options.precision : 1000;
      //let { precision = 1000 } = options; //shorthand for the above

      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  };

  //constructor takes an object as single parameter, with properties for each individual value
  let extClock = new ExtendedClock({template: 'h:m:s', precision: 2000});
  extClock.render();


//  11, 12 and 13 are in intermediate.js file
