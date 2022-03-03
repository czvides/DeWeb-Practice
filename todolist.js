// alert("Probando")
const todos = [];

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
    //todo_list.innerHTML = `<li>${texto}</li>`;
}

const todo_form_delete = document.getElementById
("form_delete");

todo_form_delete.onsubmit = e => {
    e.preventDefault();
    const numberDelete = document.getElementById("delete-todo");
    console.log(numberDelete.value);
}