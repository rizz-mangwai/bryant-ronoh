/*
1. named function
2. anonymous function:<without a name>
->a function can be assigned to variable
->a variable can refrence a function
*/
function areaCircle(){
    return 3.142*r*r;//area of a function
}//named function
//
let age = 23;
let samsAge = age;
let ac = areaCircle
/**
 what is the value of ac and what is it 
 ->hint <use typeof>
 */
console.log(ac)
//
//


let k2 = function sayMyName(){
    console.log('tha GOAT')
}
console.log("=== Step 5 ===");
k();        // Works (reference to original function)
k2();       // Works (function expression)
