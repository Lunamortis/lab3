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


function camelize(str) {
    return str
      .split('-') 
      .map(
        
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
    
    }   

    //Question 5

    //question 6


    function filterRange(arr, a, b) {
        return arr.filter(item => (a <= item && item <= b));
      }

        let arr = [5, 3, 8, 1];

        let filtered = filterRange(arr, 1, 4);

        alert( filtered ); // 3,1 (matching values)

        //question 7

        function filterRangeInPlace(arr, a, b) {
            for (let i = 0; i < arr.length; i++) {
              let val = arr[i];
              if (val < a || val > b) {
                arr.splice(i, 1);
                i--;
              }
            }
          }

            let arr = [5, 3, 8, 1];

            filterRangeInPlace(arr, 1, 4); 

            alert( arr ); 

            //question 8

            let messages = [  {text: "Hello", from: "John"},  {text: "How goes?", from: "John"},  {text: "See you soon", from: "Alice"}];

            let readMessages = new WeakSet();

            readMessages.add(messages[0]);
            readMessages.add(messages[1]);
            readMessages.add(messages[0]);

            alert("Read message 0: " + readMessages.has(messages[0]));
            








