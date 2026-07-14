const data = require("./data.json");
const fs = require("fs");

const output = [];
for (let i = 0; i < data.length; i++) {
    const doc = data[i];

    const {first_name, last_name, gender, phone, email} = doc;
  
    let title ="";
    if (doc.gender === "male") {
        title = "Mr";
    } else {
        title = "Ms";
    }
    const message = `dear${title} ${doc.first_name}, we are sorry but youre not selected for the job`;
  output.push({first_name: doc.first_name, last_name: doc.last_name, message: message, phone: doc.phone, email: doc.email });


}
const outputText = JSON.stringify(output);
fs.writeFile("output.json", outputText, (error) => {})