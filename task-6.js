let total = 0;
let input;
do {
  input = prompt("Введіть число");
  if (input === null) break;
  const number = Number(input);
  if (isNaN(number)) {
    alert("Було написано не число, спробуйте ще раз");
  } else {
    total += number;
  }
} while (input !== null);
alert(`Загальна сума чисел дорівнює ${total}`);

