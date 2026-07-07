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

///
///
function promptStudent(){
    let num1= null
    let num2 = null
    while (true){
        num1 = prompt("enter the first number");
        if (isNaN(num1)){
            continue;
        }
        num2 = prompt("enter the second name");
        if (isNaN(num2)){
            continue;//restart the loop
        }
        num1= parseInt(num1);
        num2 = parseInt(num2);
        if (num1 <= 0 || num2<=0){
            continue;
        }
        break;
    }
    console.log("got valid number", num1, num2);
    mathTable(num1 ,num2)
}

function mathTable(num1,num2){
    if (!num1 || num1 < 0 || !num2 ||num2 < 0){
        console.error("ensure numer 1 are numbers greater than 0")
    return;
    }
let outerloop = num1
while (outerloop > 0){
    doInnerLoop(outerloop, num2);//
    outerloop = outerloop - 1; 
}
//while(outerloop> o){
// let innerloop = num2//3//3}
//while (innerloop > 0){
//console.log(`outerloo)}
}
function doInnerLoop(outerloop, num2){
    let innerloop = num2;
    while(innerloop > 0){
        console.log(`outerloop=${outerloop} innerloop=${innerloop}`);
        console.log(`${outerloop}*${innerloop}=${outerloop * innerloop}`);
        innerloop - innerloop - 1
    }
}