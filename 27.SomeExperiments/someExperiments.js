console.log('-----------');

console.log([]+[]);

console.log('-----------');


(function() {
    var a = b = 5;
    console.log(`In function ${typeof a}`);
    
})();

console.log('Outside function: ');

console.log(typeof a); 
console.log(typeof b);

console.log('-----------');

console.log(1 < 2 < 3); 
console.log(3 > 2 > 1);

console.log('-----------');

const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 == obj2);
console.log(obj1 === obj2);
