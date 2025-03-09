export let credits = 23580;
export const pricePerDroid = 3000;
const quantity = prompt("Скільки дроїдів бажаєте купити?");
if (quantity === null) {
  console.log("Скасовано користувачем!");
} else {
  const totalPrice = pricePerDroid * Number(quantity);
  if (totalPrice > credits) {
    console.log("Недостатньо коштів на рахунку!");
  } else {
    credits -= totalPrice;
    console.log(`Ви купили ${quantity} дроїдів, на рахунку залишилося ${credits} кредитів.`);
  }
}