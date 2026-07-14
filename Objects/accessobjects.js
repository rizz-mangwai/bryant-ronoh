const car = {
    manufactureinfo:{   
    name: "landrover",
    model:"landrover defender 90",
    country:"solihull,united kingdom",

    topspeed:"137 km/h",
    },
    engineInfomation:{
        cylinder:"4-cylinder",
        torque:"195 lb-ft",
        power:"107 bhp",
        type : "turbocharged direct injection"
    },
    2026: "model year",
    alert_info:function(){
        alert( `
        car information:
        name:${this.name}
        model:${this.model}
        country of manufacture:${this.country}
        topspeed:${this.topspeed}
        engine infornamtion:${this.engineInfomation}`
        );
    },
    fun_fact`: "The Land Rover Defender is known for its off-road capabilities and has a rich history dating back to 1948."`
    
};
console.log(`${car.name} ${typeof car.name}`);
console.log(car);
console.log("--using console.log(table)--");
console.table(car);
console.log(`model is ${car.model}`)
