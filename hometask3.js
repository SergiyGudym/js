let names = ["Сергей", "Илья", "Саша", "Коля", "Вася", "Петя", "Миша", "Олег", "Степан", "Ярослав", "Назар", "Костя", "Виктор"];

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

let randomIndex = randomInteger(0, names.length);
let output = function() {
  console.log("Сегодняшний победитель по жизни: " + names[randomIndex] + ".");
}

output();