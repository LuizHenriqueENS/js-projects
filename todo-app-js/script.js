const taskContainer = document.getElementById('task')
const taskField = document.getElementById('task-field');
let idCount = 1;

function createTask(){
    if(taskField.value === ''){
        alert('Você precisa dizer qual tarefa deseja registrar!')
        return
    }

    let trElement =  document.createElement('tr')
    trElement.setAttribute('id', `task-${idCount}`)
    taskContainer.appendChild(trElement)
    
    for(let i = 0; i < 4; i++ ){
        trElement.appendChild(document.createElement('td'))
    }
    trElement.children[0].innerHTML = `#${idCount}`
    trElement.children[1].innerHTML = taskField.value
    trElement.children[2].appendChild(creatDeleteButton())
    trElement.children[3].appendChild(createEditButton())
    idCount++
    taskField.value = ''
}

function creatDeleteButton() {
    let newTaskDeleteButton = document.createElement('button')
    newTaskDeleteButton.innerHTML = "delete"
    newTaskDeleteButton.setAttribute('onclick', 'removeTask(this.parentNode.parentNode)')
    return newTaskDeleteButton
}

function createEditButton() {
    let newTaskEditButton = document.createElement('button')
    newTaskEditButton.innerHTML = "edit"
    newTaskEditButton.setAttribute('onclick', 'editTask(this.parentNode.parentNode.id)')
    return newTaskEditButton
}

function removeTask(parenteNodeID){
    let confirmDelete = confirm("Deseja mesmo deletar a tarefa?")
    if(confirmDelete){
        taskContainer.removeChild(parenteNodeID)
    }
}

function editTask(parentID){
    let editedTask = prompt('Sobrescreva a tarefa anterior...')
    if(editedTask === '') return
    document.getElementById(parentID).children[1].innerHTML = editedTask
}