// alert("Probando")
// Me estaba dando problemas usar la propiedad slice en un arreglo declarado con const. Me toco cambiarlo a let para evitar ese problema.

let todos = [];

const todo_form = document.getElementById("todo-form");
// Reemplazar el evento submit
todo_form.onsubmit = (e) => {
    // Evitar que vuelva a cargar la página
    e.preventDefault();
    const todo_text = document.getElementById("to-do");
    const texto = todo_text.value;
    todo_text.value = '';
    const todo_list = document.getElementById("todo-list");
    //console.log(texto);
    todos.push(texto);
    // Eliminar todos los elementos de HTML
    todo_list.innerHTML = ' ';
    for (let i = 0; i < todos.length;i ++){
        todo_list.innerHTML += `<li>${todos[i]}</li>`;
    }
    delete_text.setAttribute("max",todos.length);
    //todo_list.innerHTML = `<li>${texto}</li>`;
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
    // Eliminar elementos del arreglo "todos"
    if (deleteValue == 0){
        todos.shift();
    }else if (deleteValue == todos.length - 1){
        let pop = todos.pop();
        pop = '';
    }else{
        todos = todos.slice(0,deleteValue).concat(todos.slice(deleteValue+1));
    }
    todo_list.innerHTML = '';
    for (let i = 0; i < todos.length;i ++){
        todo_list.innerHTML += `<li>${todos[i]}</li>`;
    }
    delete_text.setAttribute("max",todos.length);
}