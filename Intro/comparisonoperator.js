/*
comparison operators evaluate to only true or false
1.equality ==
2.strict equality ===
4.strict inequality !==
--js,--
 */
let numb1="23"
let numb2=23
let strictequal=numb1===numb2 //boolean
console.log(`numb1=${numb1}===numb2=${numb2}ans ${strictequal} its type is ${typeof strictequal}`)
let nonStrictequality=numb1==numb2
console.log(`numb1=${numb1}==numb2=${numb2} ans ${nonStrictequality} its type is ${typeof nonStrictequality}`)

let val1="hello"
let val2="How are you"
//different types should be equal
// string is not equal number true
let strictInequality=val1!==val2
console.log(`val1=${val1}!==val2=$(val2)
Ans ${strictInequality} its type is $(typeof strictInequality)`)
// "30" not uqual to 30 false
let Inequality=val1!=val2
console.log(`vall=$(vall)l-val2-$(val2)
Ans $(Inequality) its type is $(typeof Inequality)`)