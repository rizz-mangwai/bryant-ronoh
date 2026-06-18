/*
  the type of is just to tell you the variable type.
  number
  string
  boolean
  null
  undefined
 */
let numb1=749
console.log("numb1", numb1, "it type is ", typeof numb1)
let strNumb="854"
console.log("strNumb",strNumb,"its type is",typeof strNumb)
let myName="rizz"
console.log('my name is ',myName,"Its type is",typeof myName)
let isMarried=true
console.log("isMarried",isMarried,"ITs type is",typeof isMarried)
let nullval=null//type of<null>object
console.log("nullVall","its type is",typeof nullval)
let unvalue;
console.log("unvalue",unvalue,"its type is",typeof unvalue)

const bonus="200"
const sallary=50000

const sallaryGross=bonus+sallary;

//console,log (sallarygross) !more information
console.log("gross salary is",sallaryGross,"its type",typeof sallaryGross)
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
const netsallary=sallaryGross-totaldeductions
console.log("your net sallary is",netsallary)