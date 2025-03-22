console.log('1: Start');

setTimeout(() => {
  console.log('2: setTimeout');

  Promise.resolve().then(() => console.log('3: Promise inside setTimeout'));
}, 0);

Promise.resolve().then(() => {
  console.log('4: First Promise');

  return Promise.resolve().then(() => console.log('5: Chained Promise'));
});

setTimeout(() => console.log('6: Another setTimeout'), 0);

console.log('7: End');
