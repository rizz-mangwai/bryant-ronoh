/*
-->for loop -> mostly for numbers
--combination of using while for number
loops: 1: start point, 2:condition, 3: afteritteration
combines it into one statement 
*/

//
///
function mathTable(){
    num1 = Number(prompt("enter first number"))
    num2 = Number(prompt("enter number 2"))
    if(num1 > 1 && num2 > 1){
      for (let b = 1;b<=num1;b++){
        for(let k = 1;k<=num2;k++){
            console.log(`${b}x${k}=${b*k}`)
        }
      }
    }
    else{
        alert("both numbers are >1")
    }
}
mathTable()