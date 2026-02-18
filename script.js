
/*Seleção dos elementos do DOM */
const inputElement = document.querySelector("#task-input");
const buttonElement = document.querySelector("#add-task-button");
const listElement = document.querySelector("#task-list");

/* Array que vai armazenar as tarefas */
let tasks = [];

/*Função para adicionar tarefa */

/*Verifica se o input está vazio */
function addTask() {
    if(inputElement.value === ''){
        alert("Digite alguma tarefa!");
        return false;
    }
}