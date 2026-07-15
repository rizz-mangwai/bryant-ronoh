/*
DOM access using
1.querryselector
2.documentget<...>

1.getelementbyid:
create a variable assign tothe dom element

*/
// === Your existing code (with small fixes) ===
const queryListAll = document.querySelectorAll(".list-item");   // Fixed class name
console.log(queryListAll);

for (let i = 0; i < queryListAll.length; i++) {
    console.log(queryListAll[i]);
}

// Save original content
const otherFruits = ["grape", "kiwi", "pineapple"];
const originalDiv = document.querySelector("#div1").innerHTML;

// ================== FUNCTIONS ==================

function original(){
    console.log("original clicked");
    document.querySelector("#div1").innerHTML = originalDiv;
}

function replace(){
    console.log("replace clicked");
    const newHtml = `<h3>list</h3>
    <ul>
        <li class="list-item">clean bathroom</li>
        <li class="list-item">clean kitchen</li> 
        <li class="list-item">clean water</li>   
    </ul>`;
    
    document.querySelector("#div1").innerHTML = newHtml;
}

function updatefruits(){
    const fruitelement = document.querySelector("#div1")
    .querySelectorAll(".list-item");
    for (let i = 0; i < fruitelement.length; i++) {
        const singleFruit = fruitelement[i];
        singleFruitElement.innerText = otherFruits[i];
    }
    
  
}