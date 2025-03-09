export function logItems(array) {
    array.forEach((item, index) => {
      console.log(`${index + 1} - ${item}`);
    });
  }