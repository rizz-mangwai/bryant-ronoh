/*
->Our own call back function
->doing shpe stuff
...->shapes
circle
rectangle
triangle

for each shape 
1. create a function <arrow, name>
2. to calculate the area...ensure
the function takes required parameters
test the function
*/
const circleArea=(radius)=>{
    return Math.PI*radius*radius
}
const rectangleArea=(length= 20, widht=20)=>{
    return length*widht
}
const triangleArea=(base,height)=>{
    return base*height
}
console.log(rectangleArea, "rectangle", 10, 20);

console.log("Circle (radius = 5)     :", circleArea(5).toFixed(4));
console.log(circleArea,"circle" , 7)

const shape = (areafunc, shapename, s1,s2,s3)=>{
    console.log("parameter 1 (function) :", areafunc)
    console.log("type of parameter 1",(typeof areafunc))
    console.log("parameter 2 ,(shape name):", shapename)
    console.log("parameter type of",(typeof shapename))
    console.log("parameter 3 (s1) :", s1)
    console.log("parameter type of",(typeof s1))
    console.log("Parameter 4 (s2)       :", s2);
    console.log("Type of param4         :", typeof s2);
    
    console.log("Parameter 5 (s3)       :", s3);
    console.log("Type of param5         :", typeof s3);

let result 
if (shapename==="circle"){
    result = areafunc(s1)
}else if(shapename==="rectangle"){
    reslut = areafunc(s1, s2)
}else if (shapename==="triangle"){
    result = areafunc(s1 , s2)
}
console.log(`area of ${shapename} = ${result}`)

}
// Testing
shape(circleArea, "Circle", 5);

shape(rectangleArea, "Rectangle", 10, 6);

shape(triangleArea, "Triangle", 8, 5);