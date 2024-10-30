let taskContainer = document.getElementById('task')
let listOfTask = []


// function addTask(){
//     let createTask = document.createElement('tr')
//     let createTD = document.createElement('td')
//     let taskName = document.createElement('td')
//     let taskDelete = document.createElement('button')
//     let taskEdit = document.createElement('button')
//     taskName.innerHTML = document.getElementById('task-field').value

//     taskContainer.appendChild(createTask)

//     createTask.appendChild(taskName)
//     createTask.appendChild(taskDelete)
//     createTask.appendChild(taskEdit)
    
//     taskDelete.setAttribute('onclick', 'getTableIndex(this.cellIndex)')
// }

function getTableIndex(element){
    alert(element)
}

function createTask(){
    let new_task = document.createElement('div')
    let newTaskDeleteButton = creatDeleteButton()
    let newTaskEditButton = createEditButton()

    createTaskCard(new_task, newTaskDeleteButton, newTaskEditButton)
}

function createTaskCard(new_task, newTaskDeleteButton, newTaskEditButton) {
    let inputField = document.getElementById('task-field')
    new_task.setAttribute("id", `${taskContainer.childElementCount}`)
    new_task.innerHTML = `${inputField.value}`
    inputField.value = ''
    taskContainer.appendChild(new_task)
    new_task.appendChild(newTaskDeleteButton)
    new_task.appendChild(newTaskEditButton)
    
}

function creatDeleteButton() {
    let newTaskDeleteButton = document.createElement('button')
    newTaskDeleteButton.innerHTML = "delete"
    newTaskDeleteButton.setAttribute('onclick', 'removeTask(this.parentNode)')
    return newTaskDeleteButton
}

function createEditButton() {
    let newTaskEditButton = document.createElement('button')
    newTaskEditButton.innerHTML = "edit"
    newTaskEditButton.setAttribute('onclick', 'editTask(this.parentElement.id)')
    return newTaskEditButton
}

function removeTask(id){
    let confirmDelete = confirm("Deseja mesmo deletar a tarefa?")
    if(confirmDelete){
        taskContainer.removeChild(id)
    }
}

function editTask(parentID){
    alert(`O ID é: ${parentID}`)
}