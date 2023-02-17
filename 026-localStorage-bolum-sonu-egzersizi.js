let counter = localStorage.getItem("counter") ? localStorage.getItem("counter") : 0  
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEventInc);
decreaseDOM.addEventListener("click", clickEventDec);

let item = function setItem(){
    localStorage.setItem("counter", counter);
}
function clickEventInc(){
    item();
    counterDOM.innerHTML = counter++;
}
function clickEventDec(){
    item();
    counterDOM.innerHTML = --counter;

}

