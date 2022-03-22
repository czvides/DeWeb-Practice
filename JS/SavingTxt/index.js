function kmRunned(laps = 0){
    return (laps * 400 / 1000 );
}
function actualDay(){
    let date = new Date();
    return `${date.toDateString()}`;
}

const btn = document.getElementById("submit");
const input = document.getElementById("laps");
input.setAttribute("minvalue","0");
input.setAttribute("required","");

btn.addEventListener("click",function(e){
    e.preventDefault();
    let kmDay = kmRunned(input.value);
    console.log(`${actualDay()} ${kmDay} km.`);
});

