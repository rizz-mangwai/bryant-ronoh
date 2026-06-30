/*
prompt("")
check if its a number
1.isNAN
2.NUMBER
3. +<>
*/
let grossMonthlySalary = null;
while (true){
    let gross = prompt ("enter your gross salary")
    if(!isNaN(gross)){
        gross = Number(gross);
        if (gross > 0){
            grossMonthlySalary = gross;
            break;
        }

    }
    alert(`Invalid amount entered.
        ensure you enter a number greater than 0`)  

}
console.log(
    `Gross salary is ${grossMonthlySalary} its type ${typeof grossMonthlySalary}`
);
//
//
const taxBands = [
    {upper:24000, rate: 0.10},
    {upeer:32333, rate:0.25},
    {upper:500000,rate: 0.30},
    {upper:800000,rate:0.325},
    {upper:Infinity,rate:0.35}
];
    
    let paye = 0
    
    //band one
    if (grossMonthlySalary > 24000){
        paye = grossMonthlySalary* 0.10;
    };
    if( grossMonthlySalary > 32333){
        paye = grossMonthlySalary*0.25;
    }
    if (grossMonthlySalary > 500000){
        paye = grossMonthlySalary*0.30
    }
    if (grossMonthlySalary > 800000)
        paye=grossMonthlySalary*0.35
   
console.log(`paye =${paye}`)
alert(`paye is ${paye} `)


let nssf = 0
let employmatch = 0
//
if(grossMonthlySalary<=9000){//tier 1
    nssf = grossMonthlySalary*0.06
}
else if (grossMonthlySalary<=108000){
    //tier 1 and tier 2
    let rem =grossMonthlySalary - 9000
    let tier1 = 9000*0.16;
    let tier2 = rem* 0.16;
    nssf= tier1 + tier2
}
else {nssf = 6840;
}


console.log(`nssf = ${nssf + grossMonthlySalary}`)
alert (`nssf is ${nssf}`)

let taxableIncome = 47000
let paye_tier= null

const bracket1 = 24000
const bracket2 =32333
const bracket3 = 500000
const bracket4 = 800000

const band1 = bracket1*0.1
const band2 = (bracket2 - bracket1)*0.25
const band3 = (bracket3 - bracket2)*0.3
const band4 = (bracket4 - bracket3)*0.325

const personal_relief = 2400

if (taxableIncome<=24000){
    paye = taxableIncome*0.1
    paye_tier = "paye 0 - 24000"
}else if(taxableIncome <= 32333){
    let diff = taxableIncome - 24000
    let tax = diff*0.25
    paye = tax + band1
    paye_tier = "paye 24000-32333" }
    else if (taxableIncome <= 500000){
        let diff = taxableIncome - 32333
        let tax = diff*0.3
        paye = tax + band1 +band2
        paye_tier = "paye 32333-500000"
    }else if (taxableIncome <= 800000){
        let diff = taxableIncome - 500000
        let tax = diff*0.325
        paye = tax + band1 + band2 +band3
        paye_tier = "paye 500000 - 800000"
    }else {
        let diff = taxableIncome - 800000
        let tax = diff*0.35
        paye = tax + band1 + band2 +band3 + band4
        paye_tier = "paye 800000 to infinity"
    }

    const final_paye = Math.max(0,paye - personal_relief)
    alert(`taxable income ${taxableIncome}paye${paye}
        personal relief ${personal_relief} 
        final paye ${final_paye} 
        tier${paye_tier}`)


