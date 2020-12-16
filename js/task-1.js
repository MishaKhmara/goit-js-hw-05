const logItems = function (array) {
  for (const arr of array) {
    const idx = array.indexOf(arr);
    console.log(`${idx + 1} -  ${arr}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
