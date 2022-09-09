//question 1

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // ?
alert(counter2()); // ?

//0,1 is the answer, because the function is called twice, and the count is incremented by 1 each time.

//question 2

function sum(a) {
    return function (b) {
        return a + b; // takes "a" from the outer lexical environment
    };
}

alert(sum(1)(2)); // 3
alert(sum(5)(-1)); // 4

//question 3

function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}

//question 3

function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

// usage:
printNumbers(5, 10);

//Nested

function printNumbers(from, to) {
    let current = from;

    setTimeout(function go() {
        alert(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}




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
        alert(this.name + (result ? ' logged in' : ' failed to log in'));
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

alert(pockets.pen);
alert(bed.glasses);
alert(table.money);

// no speed differnce

//question 7

let obj2 = new obj.constructor();

//cottect

function User(name) {
    this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

alert(user2.name);

//wrong

function User(name) {
    this.name = name;
}
User.prototype = {}; // (*)

let user = new User('John');
let user2 = new user.constructor('Pete');

alert(user2.name);

//question 8

function f(a, b) {
    alert(a + b);
}

f.defer(1000)(1, 2);

Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};

// check it
function f(a, b) {
    alert(a + b);
}

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
    alert(key);
}

alert(dictionary);

//question 10





