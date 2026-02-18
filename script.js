
/*Seleção dos elementos do DOM */
const inputElement = document.querySelector("#task-input");
const buttonElement = document.querySelector("#add-task-button");
const listElement = document.querySelector("#task-list");

/* Array que vai armazenar as tarefas */
let tasks = [];

//Rederizar tarefas 
function renderTasks(){
    /*deixando nossa ul vazia se tiver alguma coisa dentro dela */
    listElement.innerHTML = "";

    tasks.map((todo) =>{
        let liElement = document.createElement("li");
        let taskText = document.createTextNode(todo);

        liElement.appendChild(taskText);
        listElement.appendChild(liElement);


    })
}



/*Função para adicionar tarefa */

/*Verifica se o input está vazio */
function addTask() {
    if(inputElement.value === ''){
        alert("Digite alguma tarefa!");
        return false;
    }else{
        /*Vou criar uma variavel que recebe o que o usuário digitou dentro desse input */
        const newTask = inputElement.value;

        /*add essa task dentro do array de tarefas */
        tasks.push(newTask);
        /*Limpa o input para não ficar o que o user digitou p/ futuramente ele poder digitar outra tarefa */
        inputElement.value = '';
        /*renderizar novamente a lista */
        renderTasks();
    }
}

        buttonElement.onclick = addTask;