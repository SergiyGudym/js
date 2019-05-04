let arr = [];

let output = function(from, to) {
  for (i=from; i<=to; i++) {
    arr.push(i);
  }
  console.log(arr);
}

let first = prompt("Please, set a first num", "0");
let second = prompt("Please, set a second num", "0");
let num1 = parseInt(first);
let num2 = parseInt(second);
output(num1, num2);