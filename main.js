// console.log("Intro a DOM");

const p_text = document.getElementById("p_texto");

console.log(p_text.innerHTML);

alert("Hubo un cambio.");

p_text.innerText = "Cambio el párrafo p";

// Agregar elementos HTML a otro elemento HTML

alert("Agregando elementos a una etiqueta");

p_text.innerHTML = "<li>Elemento 1</li><li>Elemento 2</li>"