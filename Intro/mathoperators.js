/*
assignment =
addition + -> use to add two or more numbers
multiplication * -> use to multiply 2 or more numbers
division/
-->powers
 */
let numb1=23; //declared and assigned the variable
console.log(`numb1 is ${numb1} its type is ${typeof numb1}`)
numb1=40;// assignment only 
console.log(`numb1 is ${numb1} its type is ${typeof numb1}`)
let numb2=60
console.log(`numb2 is ${numb2} its type is${typeof numb2}`)
let numb3=numb1+numb2+10
console.log(`numb3 is ${numb3} its type is ${typeof numb3}`)
let numb4=numb1+numb2+numb3+100
console.log(`numb4 is ${numb4} its type is ${typeof numb4}`)
let numb5=numb4-numb3+2*10
console.log(`numb5 is ${numb5} its type is ${typeof numb5}`)
let numb6=Math.pow(10,3)
console.log(`numb6 is ${numb6} its type is${typeof numb6}`)
//
///
let numb7=30
let numb8=10
let divnumb=numb7/numb8
console.log(`divnumb is ${divnumb} its type is ${typeof divnumb}`)
 // 
 //modulus is somehow special
 //divide 2 numbers -> remainder
 let numb9=23
 let numb10=12
 let modNu=numb9%numb10
 console.log(`modnu is ${modNu} its type is ${typeof modNu}`)
 //calculation ->
 //is a number x a multipule of 11



 let numb3=20;
 let numb4=10

 let str1="a"
 let str2="b"

 console.log(`num3=${numb3} and numb4=${numb4}`)
 console.log(`str1=${str1} and str2=${str2}`)

 console.log(`numb3>numb4 ${numb3>numb4}`)
 console.log(`str2>str1 ${str1>str2}`)

 console.log(`numb3>=numb4 ${numb3>=numb4}`)
 console.log(`str2>=str1 ${str1>=str2}`)

 console.log(`numb3<numb4 ${numb4.numb3}`)
 console.log(`str2<str1 ${str1<str2}`)

 console.log(`numb3<=numb4 ${numb3<=numb4}`)
 console.log(`str2<=str1 ${str1<=str2}`)

 
/*
 comparison operators.
Comparison operators evaluate to only true or false.*/
/*
And->
truth table-> all posible combinations
val1 and val2
combinations are
val1 && val2
val2&&val1

-> for and all statments have to be true for
it to be true.
*/
let val1=true
let val2=true
let result1=val1&&val2
console.log(`val1=${val1} val2=${val2} val1&val2=${val1&val2}`)

let mercy_age=15
let mercy_balance=50000
//if mercy is age is greter than 18 and has more theo 20k in account
let is_greater_than_18=mercy_age>18//true or felse
console.log(`is mercy age greater than 18 $(is_greatar_than_18}`)
let has_more_than_20k=mercy_balance>20000
console.log(`Mercy has more than 20k ${has_more_than_20k}`)
console.log(`mercy is age is greter than 18
       and has more than 20k in her account
${is_greater_than_18&&has_nore_than_20k}`)
//mercy_age>18&&mercy_balance>20000
let simplified=mercy_age>18&&mercy_balance>20000
console.log(`simplified ${simplified}`)
console.log(`further simplification is ${mercy_age>1&mercy_balance>20040}`)