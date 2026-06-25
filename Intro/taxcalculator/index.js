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

