// // fundamental exercise:

// //Question 1

// //"" + 1 + 0 
// Output: "10"

// //"" - 1 + 0 
// Output: "-1"

// //true + false 
// Output: "1"

// //6 / "3"
// Output: "2"

// //"2" * "3"
// Output: "6"

// //4 + 5 + "px"
//  Output: "9px"

// "//$" + 4 + 5
//  Output: "$45"

// //"4" - 2
// Output: "2"

// //"4px" - 2
// Output: "2px" - should be NaN
console.log("4px" - 2)

// //" -9 " + 5
// Output: " -9 5"

// //" -9 " - 5
//  Output: "-14"

// //null + 1
// Output: "1"

// //undefined + 1
// Output: "1" - should be NaN
console.log(undefined + 1)

// //" \t \n" - 2
// Output: " -2"

// //Question 2

// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 2);
// alert(a + b); // 3

// //QUestion 3

// //5 > 4
// true

// //"apple" > "pineapple"
// false

// //"2" > "12"
// true

// //undefined == null
// true

// //undefined === null    
// false

// //null == "\n0\n"
// false

// //Question 4

// if ("0") {
//     alert('Hello');
// } // Yes, it will alert "Hello"

// //Question 5

// let result = (a + b < 4) ? "Below" : "Over";
// //old code
// if (a + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over';
// }

// //Question 6

// delay(() => { alert("Hello") }, 1000); // Hello after 1 second

//delay function takes function and delay in ms as params, then applies given arguments and calls the given function with required timeout
const delay = (func, ms) => (...arg) => setTimeout(()=> func.apply(null, arg), ms)

const hello = ( who ) => console.log('Hello ' + who );
const delayHello300 = delay(hello, 300);
const delayHello1000 = delay(hello, 1000);
delayHello300('world');
delayHello1000('martin')



// //Question 7

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// function isEmpty(obj) {
//     for (let key in obj) {
      
//       return false;
//     }
//     return true;
//   }

// //Question 8

//     let ladder = {
//         step: 0,
//         up() {
//           this.step++;
//           return this;
//         },
//         down() {
//           this.step--;
//           return this;
//         },
//         showStep() {
//           alert( this.step );
//           return this;
//         }
//       };
      
//       ladder.up().up().down().showStep().down().showStep(); 

// //Question 9

// function Accumulator(startingValue) {
//     this.value = startingValue;
  
//     this.read = function() {
//       this.value += +prompt('How much to add?', 0);
//     };
  
//   }
  
//   let accumulator = new Accumulator(1);
//   accumulator.read();
//   accumulator.read();
//   alert(accumulator.value);
