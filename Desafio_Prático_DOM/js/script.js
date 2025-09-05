// 1. Altera o título da página
const titulo = document.getElementById("titulo");

titulo.innerHTML = "Minha Lista de Tarefas Dinâmica!"

console.log(titulo);

// 2. Adicionar novo item "Estudar JavaScript DOM"

let ul = document.getElementById('lista-tarefas');
let newTask = document.createElement('li');

newTask.textContent = "Estudar JavaScript DOM";

ul.appendChild(newTask);

// 3. Marcar o primeiro item como concluído

let firstTask = ul.querySelector('li');
firstTask.classList.add('concluído');