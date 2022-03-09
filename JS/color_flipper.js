// alert("funcionando");

// Defining the simple array.
const colors = ["green","red","rgba(133,122,200)","#F15025"];

// Selecting the button click me! and the span color.
const btn = document.querySelector('.btn');
const color_span = document.getElementById('color_span');

// Selecting the buttons of the nav bar
const btn_simple = document.getElementById('color_simple');
const btn_hex = document.getElementById('color_hex');

// Functions of the nav bar buttons, they change the id of the color generate button. And also add a class to know that the button is selected.
btn_simple.addEventListener("click", function(){
    btn.setAttribute("id","color_simple_btn");
    btn_simple.setAttribute("class","btn-clicked");
    btn_hex.removeAttribute("class","btn-clicked");
    console.log(btn.id);
});
btn_hex.addEventListener("click", function(){
    btn.setAttribute("id","color_hex_btn");
    btn_simple.removeAttribute("class","btn-clicked");
    btn_hex.setAttribute("class","btn-clicked");
    console.log(btn.id);
});


// Function of the generate color. It choose between its id.
btn.addEventListener("click",function(){
    if (btn.id == "color_hex_btn") {
        hexadecimalColor();
    }else if(btn.id == "color_simple_btn"){
        simpleColor();
    }else{
        alert("Select 1 navbar button");
    }
});

// Select a index of the colors array. Displaying on the screen and in the span tag.
function simpleColor(){
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color_span.innerText = colors[randomNumber];
}

// With the value returned of the getColorNumber function. It displays the value on the body and the span tag.
function hexadecimalColor(){
    const randomColor = getColorNumber();
    document.body.style.backgroundColor = randomColor;
    color_span.innerText = randomColor;
}

// Generates a random color using the ASCII numbers. 
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