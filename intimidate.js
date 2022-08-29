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
alert( styles.shift() );
styles.unshift("Rap", "Reggae");
alert( styles.pop() );

//question 4




