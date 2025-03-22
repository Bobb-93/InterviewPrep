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

