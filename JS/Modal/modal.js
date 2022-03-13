const btn = document.getElementById("modal_button");
const div_open = document.getElementById("modal_open");
const div_content = document.getElementById("modal_content");
const exit = document.getElementById("exit");
btn.addEventListener("click", function(){
    div_content.classList.remove("hide");
    div_open.classList.add("hide");
});
exit.addEventListener("click", function(){
    div_content.classList.add("hide");
    div_open.classList.remove("hide");
})