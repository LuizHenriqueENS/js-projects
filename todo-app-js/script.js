let taskContainer = document.getElementById('container')
let i = 0

let listOfTask = []

function createTask(){
    let new_task = document.createElement('div')
    let newTaskDeleteButton = document.createElement('button')
    let newTaskEditButton = document.createElement('button')
    
    newTaskDeleteButton.innerHTML = "delete"
    newTaskDeleteButton.setAttribute('onclick', 'alertTest(this.parentElement.id)')
    new_task.setAttribute("id", `${i}`)
    newTaskEditButton.innerHTML = "edit"
    new_task.innerHTML = `${i}`
    taskContainer.appendChild(new_task)
    new_task.appendChild(newTaskDeleteButton)
    new_task.appendChild(newTaskEditButton)
    i++
    listOfTask.push(new_task)
}

function alertTest(id){
    
}