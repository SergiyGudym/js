let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let number = prompt("Введите число для сортировки массива.", "0");
let flag = confirm("Ok - покажет все числа, что делятся на Ваше число. Отмена - покажет числа, которые не делятся на Ваше число.");


if (flag == false) {
// array  with numbers which are not dividing by 3
let arr0 = arr.filter(function(num) {
  return num % number;
})
console.log(arr0);
} else {
  let arr1 = arr.filter(function(num) {
    return (num % number == 0);
  })
  console.log(arr1);
}
