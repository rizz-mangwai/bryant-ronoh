/*
funnction that calls itself
->sinnce its an endless loop you'll have to find a way to terminate 
using a return statement and if statement
*/

function salaryGrosspromptProcess(
message = "enter your gross salary") {
    let gross = prompt("message");
    if(isNaN(gross) ===false){
        console.log(`this is your amount ${gross} `);
        return gross;
    } 
    return(`Invalid gross salary entered enter a number`);
    salaryGrosspromptProcess()
}
salaryGrosspromptProcess()
///


