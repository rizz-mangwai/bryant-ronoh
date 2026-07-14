const Cars = [
    "Land Rover Defender",
    "lamborghini Aventador",
];
const guns = {
    0: "AK-47",
    1: "M16",
    push:function(newGun){
        const key = this.length;
        this[key] = newGun;
        this.length += 1;
    },

    length: 55,
};
console.table(Cars);
console.table(guns); 
guns.length = 56;
