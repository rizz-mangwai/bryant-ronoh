/*
function allow uou to write reusable bits of code 
to use dry(do not repeat yourself)by using coding block

/{/code block/}/
syntax;
/*function//  name: variable name convection > (< parameters>){codeblock/
}*/

/*
//big rule 
->function exectutes only when called
-calling a function is telling the function to do its work
*/
/*
create a simple function that when you call it alerts you on the current time
*/

/* 
call a function use thefunction name then ()-> brackets 
*/


/**
 area of a triangle 
 0.5*l*w
 */
//base = undefined , height undefined
// Your function here
function areaOfTriangle(base, height) {
    console.log(`base, height is ${base} its type ${typeof base}`);
    console.log(`height is ${height} its type ${typeof height}`);
    const area = 0.5 * base * height;
    console.log(`For triangle with base ${base} and height ${height} area is ${area}`);
}

// ==================== CALL THE FUNCTION ====================

console.log("=== Scenario 1 ===");
areaOfTriangle();                    // ← Important

console.log("\n=== Scenario 2 ===");
areaOfTriangle(20);

console.log("\n=== Scenario 3 ===");
areaOfTriangle(20, 30);

/*
  1. exist code
  2. return any required data.
*/

