const btn = document.querySelector(".size-btn");
let state = '';
const links = document.getElementById("links");

btn.addEventListener("click",function(){
    // console.log("Funcionando...");
    if (state === '' || state == 'on'){
        links.classList.remove('hide');
        state = 'off';
    }else{
        links.classList.add('hide')
        state = 'on';
    }
});