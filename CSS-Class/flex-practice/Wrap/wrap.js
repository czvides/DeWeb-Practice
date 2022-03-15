let day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

const btn_add = document.querySelector(".btn-wrap");
const div = document.querySelector(".div-container");
let count = 0

btn_add.addEventListener("click",function(){
    if(count == day.length){
        count = 0;
    }
    div.innerHTML += `<div>${day[count]}</div>`
    count++;
});