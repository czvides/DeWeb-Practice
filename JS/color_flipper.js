// alert("funcionando");

// Defining the simple array.
const colors = ["green","red","rgba(133,122,200)","#F15025"];

// Selecting the button click me! and the span color.
const btn = document.querySelector('.btn');
const color_span = document.getElementById('color_span');
/*
btn.addEventListener("click",function(){
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color_span.innerText = colors[randomNumber];
});
*/
btn.addEventListener("click",function(){
    const randomColor = getColorNumber();
    document.body.style.backgroundColor = randomColor;
    color_span.innerText = randomColor;
});
function getColorNumber (){
    let hexNumber = '#';
    for(let i = 0; i < 6; i++){
        if(Math.floor(Math.random()* 2) === 1){
            let number = String.fromCharCode(Math.floor(Math.random()*10)+48);
            hexNumber = hexNumber.concat(number)
        }else{

            let letter = String.fromCharCode(Math.floor(Math.random()*6)+65);
            hexNumber = hexNumber.concat(letter);
        }
    }
    return hexNumber;
}