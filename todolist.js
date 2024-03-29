// alert("Probando")
// Me estaba dando problemas usar la propiedad slice en un arreglo declarado con const. Me toco cambiarlo a let para evitar ese problema.

let todos = ["Tarea 1","Tarea 2","Tarea 3","Tarea 4"];

const render = () => {
    const todo_list = document.getElementById("todo-list");
    //console.log(texto);
    // Eliminar todos los elementos de HTML
    /*
    todo_list.innerHTML = ' ';
    for (let i = 0; i < todos.length;i ++){
        todo_list.innerHTML += `<li>${todos[i]}</li>`;
    }
    */
    const todosTemplate = todos.map(t => `<li>${t}</li>`);
    todo_list.innerHTML = todosTemplate.join('');
    delete_text.setAttribute("max",todos.length);
    //todo_list.innerHTML = `<li>${texto}</li>`;

    const elementos = document.querySelectorAll("#todo-list li");
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click',() => {
            // Eliminar un elemento HTML
            // Los elementos padres tiene la capacidad de eliminar a sus hijos
            elemento.parentNode.removeChild(elemento);
            todos.splice(i,1);
            render();
            console.log(elemento, i)
        })
    });
}
const todo_form = document.getElementById("todo-form");
// Reemplazar el evento submit
todo_form.onsubmit = (e) => {
    // Evitar que vuelva a cargar la página
    e.preventDefault();
    const todo_text = document.getElementById("to-do");
    const texto = todo_text.value;
    todo_text.value = '';
    todos.push(texto);
    render();
}

// Definir atributos en las etiquetas HTML
const add_text = document.getElementById("to-do");
// autocomplete off - Evitar que aparezcan cuadros emergentes.
add_text.setAttribute("autocomplete","off");

const delete_text = document.getElementById("delete-todo");
delete_text.setAttribute("min",1);
delete_text.setAttribute("max",todos.length);
delete_text.setAttribute("autocomplete","off");
delete_text.value = 1;

// Seleccionar el formulario para eliminar tareas
const todo_form_delete = document.getElementById
("form_delete");

todo_form_delete.onsubmit = e => {
    e.preventDefault();
    const numberDelete = document.getElementById("delete-todo");
    // Comenzamos la cuenta desde 1, por lo que le restaremos 1 al momento de manejar los arreglos 
    let deleteValue = numberDelete.value - 1;

    const todo_list = document.getElementById("todo-list");
    todos.splice(deleteValue,1);
    /*
    // Eliminar elementos del arreglo "todos"
    if (deleteValue == 0){
        todos.shift();
    }else if (deleteValue == todos.length - 1){
        let pop = todos.pop();
        pop = '';
    }else{
        todos = todos.slice(0,deleteValue).concat(todos.slice(deleteValue+1));
    }
    */
    const todosTemplate = todos.map(t => `<li>${t}</li>`);
    todo_list.innerHTML = todosTemplate.join('');
    /*
    todo_list.innerHTML = '';
    for (let i = 0; i < todos.length;i ++){
        todo_list.innerHTML += `<li>${todos[i]}</li>`;
    }
    */
    delete_text.setAttribute("max",todos.length);
}

// 11. querySelectorAll