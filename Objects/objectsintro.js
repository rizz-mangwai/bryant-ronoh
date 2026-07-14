/*
-objects are complex data type
its a datatype that houses other datatypes

-in reallife you cannot relly express data using a songle variable
-

->{
  key : value
  key ; value
  key : value
}//blocke

key =><number or a string><unique>
value=>any datatype <boolean,string,null,object> be afunction
if value is a function<method>

*/
//
//
/*
object oriented programming
functional programming
why objects are usefull
if you want to represent a complex datatype
*/
///long process
const student_name = "samson"
const student_age = 25
const student_phone = "071234587"

///short cut
const student = {
    name : "bryant",
    age : 24,
    "favorite quote":"work hard play hard",
    parent :{
        name: "heather",
        phone: "1234567",
    },
    pet:{},
    24: "fav number"
}
///
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
        const info =`
        car information:
        name:${this.name}
        model:${this.model}
        country of manufacture:${this.country}
        topspeed:${this.topspeed}
        engine infornamtion:${this.engineInfomation}`
        alert(info);
    }
    
};
console.log(car)
