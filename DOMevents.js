/**
 Events
 is something happens in the DOM, and you can respond to it by using JavaScript. For example, when a user clicks a button, that click is an event. You can write code that listens for that event and responds accordingly.
 */
function clickAlert(e){
    console.log(e);
    alert("hi this is nice!");
}
function mouseoverAlert(cats){
    console.log(cats);
    console.log("mouse over",new Date());
    alert("mouse is over the button!");
}
/*
quertyselector,getelementbyid
//
addevent(@param1,@param2)
@param1 ->event(click,mouseover,mouseout,keydown,keyup)
@param2 ->callback(e)=> e is a dom element
*/
document
.querySelector("#btn-event-checker")
.addEventListener("click", clickAlert);

document
.querySelector("#btn-event-checker")
.addEventListener("mouseover", mouseoverAlert);



window.addEventListener("mousemove", (e)=>{
    console.log("mouse moved", e.clientX, e.clientY);
}
);