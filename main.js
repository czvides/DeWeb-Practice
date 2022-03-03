// console.log("Intro a DOM");

const p_text = document.getElementById("p_texto");

console.log(p_text.innerHTML);

// alert("Hubo un cambio.");

p_text.innerText = "Cambio el párrafo p";

// Agregar elementos HTML a otro elemento HTML

// alert("Agregando elementos a una etiqueta");

p_text.innerHTML = "<li>Elemento 1</li><li>Elemento 2</li>";

div_text = document.getElementById("div_texto");

div_text.innerHTML = `<h1>Título div</h1>
                        <p>Esto es un párrafo dentro de un div</p>
                        <p>Otra etiqueta p</p>`;