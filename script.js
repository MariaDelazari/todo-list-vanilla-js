/*
   Seleção dos elementos do DOM
 */
const inputElement = document.querySelector("#task-input");
const buttonElement = document.querySelector("#add-task-button");
const listElement = document.querySelector("#task-list");


/* 
   Array que armazena as tarefas
 */
let tasks = [];


/*
   Função responsável por renderizar as tarefas na tela
 */
function renderTasks() {

    // Limpa a lista antes de renderizar novamente
    // Isso evita duplicação visual
    listElement.innerHTML = "";

    tasks.forEach((todo) => {

        const liElement = document.createElement("li");
        const taskText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        linkElement.setAttribute("onclick", "deleteTask()");


        liElement.appendChild(taskText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);

        

    });
}


/*  
Função para adicionar nova tarefa 
*/
function addTask() {

    // Remove espaços extras antes e depois do texto
    const newTask = inputElement.value.trim();

    // Impede tarefas vazias
    if (newTask === "") {
        alert("Digite alguma tarefa!");
        return;
    }

    // Adiciona tarefa ao array (fonte da verdade)
    tasks.push(newTask);

    // Limpa o input para próxima digitação
    inputElement.value = "";

    // Atualiza a interface
    renderTasks();
}


// Evento de clique
buttonElement.addEventListener("click", addTask);

function deleteTask(){
    alert("test");

}
