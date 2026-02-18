/*
   Seleção dos elementos do DOM
*/
const inputElement = document.querySelector("#task-input");
const buttonElement = document.querySelector("#add-task-button");
const listElement = document.querySelector("#task-list");

/* 
   Array que armazena as tarefas
*/
//sempre garantir que seja um array
let tasks = JSON.parse(localStorage.getItem("@listTasks")) || [];

/*
   Função responsável por renderizar as tarefas na tela
*/
function renderTasks() {

    // Limpa a lista antes de renderizar novamente
    listElement.innerHTML = "";

    // Agora pegamos também o index
    tasks.forEach((todo, index) => {

        const liElement = document.createElement("li");
        liElement.textContent = todo;

        // Criando botão p/ excluir
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";

        // Evento moderno e correto
        deleteButton.addEventListener("click", function () {
            deleteTask(index);
        });

        liElement.appendChild(deleteButton);
        listElement.appendChild(liElement);
    });
}

renderTasks();
/*  
   Função para adicionar nova tarefa 
*/
function addTask() {

    const newTask = inputElement.value.trim();

    if (newTask === "") {
        alert("Digite alguma tarefa!");
        return;
    }

    tasks.push(newTask);

    inputElement.value = "";

    renderTasks();
    saveData();
}

// Evento de clique
buttonElement.addEventListener("click", addTask);


/*
   Função para deletar tarefa
*/
function deleteTask(index) {

    // Remove 1 item na posição recebida
    tasks.splice(index, 1);

    // Atualiza a tela
    renderTasks();
    saveData();
}

function saveData(){
    localStorage.setItem("@listTasks", JSON.stringify(tasks));

}
