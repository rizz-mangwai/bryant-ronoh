/*
console.log --> debbuging by printing out information in the screen

console.log -> ensure you write your consoles in a way that they help you figure out the issue 


->simple exercise from a gross salary
->let calculate net salary
*/ 
const sallaryGross=50000;//instruction
//console,log (sallarygross) !more information
console.log("gross salary is",sallaryGross) //more info
//tax calculation
const paye= "sallarygross*0.16"  
console.log("for gross sallary of", sallaryGross, "paye is",paye)
//
const nhif=2500
console.log("nhif deduction ",nhif)
const sha=2500
console.log("SHA is ",sha)
const totaldeductions=paye+nhif+sha
console.log("total deduction are ", totaldeductions)
console.log("your net sallary is", "netsallary")
