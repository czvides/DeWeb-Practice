const btn_down = document.querySelectorAll(".down");
const btn_up = document.querySelectorAll(".up");


btn_down.forEach(function (btn){
    btn.addEventListener("click", function (e){
        const question = e.currentTarget.parentElement.parentElement;
        const up = question.querySelector(".up");
        const answer = question.querySelector(".answer");
        const down = question.querySelector(".down");
        down.classList.add("hide");
        up.classList.remove("hide");
        answer.classList.remove("hide");
    });
});

btn_up.forEach(function(btn){
    btn.addEventListener("click", function (e){
        const question = e.currentTarget.parentElement.parentElement;
        const up = question.querySelector(".up");
        const answer = question.querySelector(".answer");
        const down = question.querySelector(".down");
        up.classList.add("hide");
        down.classList.remove("hide");
        answer.classList.add("hide")
    });
});