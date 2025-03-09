export function checkStorage(available, ordered) {
    if (ordered === 0) {
      return "У замовленні немає товарів";
    } else if (ordered > available) {
      return "Ваше замовлення занадто велике, на складі недостатньо товарів!";
    } else {
      return "Замовлення прийнято, наш менеджер зв'яжеться з Вами.";
    }
  }