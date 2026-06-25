/*
if and else if -> chain 
-> we exit if and else when we reach the first
*/
let age = prompt("enter your age");
//
console.log(`age is ${age} type of ${typeof age}`);
alert(`you entered ${age}`);
//age=27
//27>10 :true ->
if (age < 10){
    alert("you are a kid")
}
else if (age < 18){
    alert('you are a teen')
}
else if (age > 18){
    alert('youre f grown')
}
else if (age > 28){
    alert(`go marry son`)
}
else if(age > 40){
    alert('time to retire')
}