//alert("Probando");
let value = 0

const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const number = document.getElementById('number');

decrease.addEventListener("click",function(){
    value -= 1;
    number.innerText = value
});

reset.addEventListener("click",function(){
    value = 0;
    number.innerText = value;
});

increase.addEventListener("click",function(){
    value += 1;
    number.innerText = value;
});