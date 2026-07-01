/*
-> call back function -> <please call me>
-> call back-> function call me -> call the function
-> a function that takes one or more parameters as function
*one of or more of the parameters functions

*/

//task
function printCurrentTimeAlert(){
         let now = new Date()
         let timeStamp = now.toLocaleTimeString()
    console.log('current time is',timeStamp)
    alert(`current time: ${timeStamp}`)     
} 
printCurrentTimeAlert()


function sayMyName(){
    console.log("my name is ronoh")
    alert("my name is ronoh")
}
sayMyName()

let sayMyName2 = function()
{
    console.log("im king")
    alert('my name is romoh')
};
sayMyName2()

const sayMyNameArrow = () => {
  console.log("My name is king (Arrow)");
  alert("My name is king (Arrow)");
};

// Test
sayMyNameArrow();