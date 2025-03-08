function GFG() {
 
    // 'use strict' verifies that no undeclared
    // variable is present in our code

    // 'use strict';
    x = "GeeksForGeeks";
    console.log(x);
    
}
 
GFG(); // Accessing the above function


function checkVar() {
    'use strict';

    let string;
 
    // if ( variable === "undefined") {
    if (typeof variable === "undefined") {
        string = "Variable is undefined";
    } else {
        string = "Variable is defined";
    }
     
    console.log(string);
}
 
checkVar();