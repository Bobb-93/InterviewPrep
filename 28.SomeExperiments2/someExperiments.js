console.log('-----------');
let x = 10;
let y = (x++, x + 1, x * 2); // 9, 11, 22
console.log(y);//undefined
