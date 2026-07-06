/*
loops: run a block over and over again
you should not loop forever or infinity
have an exit condition
syntax:
while(<condition>){
//block of code
}
//condition is truthy = continues
//condition is falsey = exit

*/
let n = 20;
let condition = true;
while (condition){
    console.log("n is" , n);
    n = n + 1;
    if(n>30){
        condition = false;
    }
}